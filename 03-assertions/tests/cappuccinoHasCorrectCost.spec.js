import { test, expect } from '@playwright/test';

test('Cappuccino cup has correct cost', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');

  // Assert "Cappuccino" cup contains text '$19.00'
  await expect(
    page.getByRole('heading', { name: 'Cappuccino $19.00' })
  ).toBeVisible();
});