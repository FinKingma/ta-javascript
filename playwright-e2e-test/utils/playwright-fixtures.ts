import { test as base } from '@playwright/test';
import { Commands } from './custom-commands';

export const test = base.extend<{commands: Commands}>({
  commands: async ({page}, use) => {
    await use(new Commands(page));
  }
});
export { expect } from '@playwright/test';