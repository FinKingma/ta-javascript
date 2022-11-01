import { test, expect } from '../utils/playwright-fixtures';

test.describe('UI Test automation playground 2', () => {

  test('Class Attribute', async({page}) => {
    await page.goto('http://uitestingplayground.com/classattr');
    await page.on('dialog', dialog => dialog.accept());
    await page.click('.btn-primary');
  })

  test('Client Side Delay', async({page}) => {
    await page.goto('http://uitestingplayground.com/clientdelay');
    await page.click('#ajaxButton');
    await expect(page.locator('.bg-success')).toHaveText('Data calculated on the client side.', { timeout: 30000 });
    await page.click('.bg-success');
  })

  test('Dynamic Table', async({page}) => {
    await page.goto('http://uitestingplayground.com/dynamictable')
    const expectedCompleteString = await page.locator('.bg-warning').innerText();
    const expectedValue = expectedCompleteString.split(':')[1].trim();
    const actualCell = await page.
      locator('div[role="table"]').
      locator('div[role="row"]:has-text("Chrome")').
      locator('span[role="cell"]:has-text("%")')
    await expect(actualCell).toHaveText(expectedValue);
  })

  test('Sample App', async({page}) => {
    await page.goto('http://uitestingplayground.com/sampleapp')
    await page.fill('input[name="UserName"]', 'Fin');
    await page.fill('input[name="Password"]','pwd');
    await page.click('#login');
    await expect(page.locator('#loginstatus')).toContainText('Welcome, Fin!');
  })
})
