import { test, expect } from '@playwright/test';

test('Cart cleaned after page refresh', async ({ page }) => {
  /*
  Test:
  1. Open the Coffee Cart menu page https://coffee-cart.app/
  2. Click on the "Cappuccino" cup
  4. Click one the "Cart" link
  5. Wait for the URL https://coffee-cart.app/cart 
  6. Assert Cappucion is visible in the cart
  7. Reload the page
  8. Assert Cappucion is not viisble (hidden) in the cart
  9. Assert the message "No coffee, go add some" is visible

  Tips: 
  1. Use "await page.reload();" to reload the page.
  2. Use filter({hasText: "ItemName"}) to find the required drink row.
    Do not rely on the exact order of the drinks. 
  */
});
