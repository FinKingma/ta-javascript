import { ICustomWorld } from './custom-world';
import config from './config';
import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import {
  chromium,
  ChromiumBrowser,
} from '@playwright/test';
import { ITestCaseHookParameter } from '@cucumber/cucumber/lib/support_code_library_builder/types';
import { ensureDir } from 'fs-extra';
import { ConsoleMessage } from '@playwright/test';

let browser: ChromiumBrowser;
const tracesDir = 'traces';

declare global {
  // eslint-disable-next-line no-var
  var browser: ChromiumBrowser;
}

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch(config.browserOptions);
  await ensureDir(tracesDir);
});

Before({ tags: '@ignore' }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return 'skipped' as any;
});

Before({ tags: '@debug' }, async function (this: ICustomWorld) {
  this.debug = true;
});

Before(async function (this: ICustomWorld, { pickle }: ITestCaseHookParameter) {
  this.startTime = new Date();
  this.testName = pickle.name.replace(/\W/g, '-');
  this.context = await browser.newContext({
    acceptDownloads: true,
    viewport: { width: 1200, height: 800 },
  });

  await this.context.tracing.start({ screenshots: true, snapshots: true });
  this.page = await this.context.newPage();
  this.feature = pickle;
});

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
  if (result) {
    await this.attach(`Status: ${result?.status}. Duration:${result.duration?.seconds}s`);

    if (result.status !== Status.PASSED) {
      const image = await this.page?.screenshot();
      image && (await this.attach(image, 'image/png'));

      const timestamp = this.startTime?.toLocaleTimeString().replace(/:/gi, '_');
      const traceFile = `${tracesDir}/${this.testName}-${timestamp}-trace.zip`;
      await this.context?.tracing.stop({path: traceFile});
      const traceViewCommand = `npx playwright trace-viewer ${traceFile}`;
      await this.attach(traceViewCommand);
    }
  }
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  const reportUrl = require('path').resolve('./reports/report.html');
  
  await browser.close();
  require('open')(reportUrl);
});