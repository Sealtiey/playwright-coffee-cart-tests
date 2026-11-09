import { test, expect } from '@playwright/test';

test('Discounted Mocha added to the Cart after promo accepting', async ({
  page,
}) => {
  /*
  Test:
  1. Open the Coffee Cart menu page https://coffee-cart.app/
  2. Click on the "Cappuccino" cup
  3. Click on the "Espresso" cup
  4. Click on the "Americano" cup
  5. Assert the message
    "It's your lucky day! Get an extra cup of Mocha for $4." is visible
  6. Click the button 'Yes, of course!'
  7. Click one the "Cart" link
  8. Wait for the URL https://coffee-cart.app/cart 
  9. Assert the "Espresso" has Total cost '$10.00'
  10. Assert the "(Discounted) Mocha" has Total cost '$4.00'
  11. Assert the "Cappuccino" has Total cost '$19.00'
  12. Assert the "Americano" has Total cost '$7.00'

  Tips: 
  1. Use double-quotes for messages which contains apostrophe.
    Example: "Nah, I'll skip."
  2. Use filter({hasText: "ItemName"}) to find the required drink row. 
    Do not rely on the exact order of the drinks. 
   */
  await page.goto('https://coffee-cart.app/');

await page.getByTestId('Cappuccino').click();
await page.getByTestId('Espresso').click();
await page.getByTestId('Americano').click();

await expect(
  page.getByText("It's your lucky day! Get an extra cup of Mocha for $4.")
).toBeVisible();

await page.getByRole('button', { name: 'Yes, of course!' }).click();

await page.getByLabel('Cart page').click();
await page.waitForURL('https://coffee-cart.app/cart');

const espresso = page.locator('li.list-item:visible').filter({
  hasText: 'Espresso'
});
await expect(espresso).toContainText('$10.00');

const mocha = page.locator('li.list-item:visible').filter({
  hasText: 'Mocha'
});
await expect(mocha).toContainText('$4.00');

const cappuccino = page.locator('li.list-item:visible').filter({
  hasText: 'Cappuccino'
});
await expect(cappuccino).toContainText('$19.00');

const americano = page.locator('li.list-item:visible').filter({
  hasText: 'Americano'
});
await expect(americano).toContainText('$7.00');
});