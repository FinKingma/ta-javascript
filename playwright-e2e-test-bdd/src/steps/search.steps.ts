import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

Then('I should see a search hotel overview', async function (this: ICustomWorld) {
  const actualTitle = await this.page?.locator('.login_title').innerText();
  expect(actualTitle).toContain('Search Hotel');
});

Then('I should not see a search hotel overview', async function (this: ICustomWorld) {
  const actualTitle = await this.page?.locator('.login_title').innerText();
  expect(actualTitle).not.toContain('Search Hotel');
});
