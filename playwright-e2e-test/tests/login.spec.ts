import { test, expect } from '../playwright-fixtures';

test('I can log in on the hotel app', async ({ page, commands }) => {
  await page.goto('http://adactinhotelapp.com/index.php');
  await commands.login('finkingma', 'MIG35D');
  await expect(page.locator('.login_title')).toContainText('Search Hotel');
});

test('With invalid credentials I will not be able to login on the Hotel App', async ({ page, commands }) => {
  await page.goto('http://adactinhotelapp.com/index.php');
  await commands.login('finkingma', 'invalid');
  await expect(page.locator('.login_title')).not.toContainText('Search Hotel');
});
