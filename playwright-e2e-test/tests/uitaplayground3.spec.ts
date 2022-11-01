import { test, expect } from '../utils/playwright-fixtures';

test.describe('UI Test automation playground 3', () => {

  test('Hidden Layers', async({page}) => {
    await page.goto('http://uitestingplayground.com/hiddenlayers');
    await page.click('#greenButton');
    await expect(page.locator('#blueButton')).toBeVisible();

    let error = false;
    try {
      await page.locator('#greenButton').click({trial:true, timeout:500})
    } catch(msg) {
      error = true;
    } finally {
      expect(error).toBeTruthy();
    }
  })

  test('Click', async({page}) => {
    await page.goto('http://uitestingplayground.com/click')
    await page.click('#badButton');
    await expect(page.locator('#badButton')).toHaveClass('btn btn-success')
  })

  test('Verify Text', async({page}) => {
    await page.goto('http://uitestingplayground.com/verifytext')
    await expect(page.locator('.bg-primary:has-text("Welcome UserName!")')).toBeVisible();
  })

  test('Mouse Over', async({page}) => {
    await page.goto('http://uitestingplayground.com/mouseover')
    await page.click('a:has-text("Click me")');
    await page.click('a:has-text("Click me")');
    await expect(page.locator('#clickCount')).toHaveText('2')
  })
})
