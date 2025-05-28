import { test } from '@playwright/test';

test.describe('Home page', () => {
  test('should load default route', async ({ page }) => {
    await page.goto('http://localhost:4200');
  });
});
//a+b
//sum of a and b