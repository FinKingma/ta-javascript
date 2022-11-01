import { test, expect } from '../utils/playwright-fixtures';

test.describe('UI Test automation playground 4', () => {
  test('Load Delays', async({page}) => {
    await page.goto('http://uitestingplayground.com/loaddelay');
    await page.click('.btn-primary');
  })

  test('Text input', async({page}) => {
    await page.goto('http://uitestingplayground.com/textinput');
    await page.fill('#newButtonName', 'SPARTAA');
    await page.click('#updatingButton');
    await expect(page.locator('#updatingButton')).toHaveText('SPARTAA');
  })

  test('Progress Bar', async({page}) => {
    await page.goto('http://uitestingplayground.com/progressbar');
    await page.click('#startButton');
    await page.waitForSelector('#progressBar:has-text("75%")', {timeout:30000});
    await page.click('#stopButton');
  })

  test('Non-Breaking Space', async({page}) => {
    await page.goto('http://uitestingplayground.com/nbsp');
    await page.click('button:has-text("My Button")');
  })
})
