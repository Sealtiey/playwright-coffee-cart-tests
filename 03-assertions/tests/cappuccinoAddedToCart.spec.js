import { test, expect } from '@playwright/test';

test('Cappuccino correctly added to the Cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByTestId('Cappuccino').click();
  await page.getByLabel('Cart page').click();
  await page.waitForURL('https://coffee-cart.app/cart');
  // Assert that the 'Cappuccino' text is visible in the Item column

  await expect(page.locator('li').locator('div').nth(0)).toContainText('Cappuccino');

  // Assert that the '$19.00 x 1' text is present in the Unit column

await expect(page.getByText('$19.00 x 1')).toBeVisible();
  // Assert that the '$19.00' text is present in the Total column

await expect(page.getByText('$19.00', { exact: true })).toBeVisible();
});