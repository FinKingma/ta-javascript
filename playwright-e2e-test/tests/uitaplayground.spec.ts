import { test, expect } from '../utils/playwright-fixtures';

test.describe('UI Test automation playground', () => {
  test('Dynamic ID', async({page}) => {
    await page.goto('http://uitestingplayground.com/dynamicid');
    await page.click('.btn-primary');
  })

  test('AJAX Data', async({page}) => {
    await page.goto('http://uitestingplayground.com/ajax');
    await page.click('#ajaxButton');
    await expect(page.locator('.bg-success')).toHaveText('Data loaded with AJAX get request.', { timeout: 30000 })
  })

  test('Scrollbars', async({page}) => {
    await page.goto('http://uitestingplayground.com/scrollbars')
    await page.click('#hidingButton');
  })

  test('Visibility', async({page}) => {
    await page.goto('http://uitestingplayground.com/visibility')
    await page.click('#hideButton');
    const ids = [
      '#removedButton',
      '#zeroWidthButton',
      '#overlappedButton',
      '#invisibleButton',
      '#notdisplayedButton',
      '#offscreenButton'
    ];
    for (const id of ids) {
      let error = false;
      try {
        await page.locator(id).click({trial:true, timeout:500})
      } catch(msg) {
        console.log(`error for: ${id}`);
        error = true;
      } finally {
        console.log(`${id} triggered error: ${error}`);
        expect(error).toBeTruthy();
      }
    }
    
    // de id's die wel zichtbaar zijn
    await expect(page.locator('#hidingLayer')).toBeVisible();
    await expect(page.locator('#transparentButton')).toBeVisible();
  })
})
