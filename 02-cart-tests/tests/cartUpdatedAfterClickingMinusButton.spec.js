import { test, expect } from '@playwright/test';

test('Cart updated after clicking minus for drinks', async ({ page }) => {
  /*
  Test:
    1. Open the Coffee Cart menu page https://coffee-cart.app/
    2. Click on the "Cappuccino" cup
    3. Click on the "Espresso" cup
    4. Click one the "Cart" link
    5. Wait for the URL https://coffee-cart.app/cart 
    6. Assert that Espresso is visible in the cart
    6. Click "-" for Espresso
    7. Assert that Espresso is removed from the cart
    9. Assert that Cappucion is viisble in the cart
    10. Click - for Cappucion
    11. Assert that Cappucion is removed from the cart
    12. Assert the message "No coffee, go add some" is visible
  
  Tip: 
    1. Use filter({hasText: "ItemName"}) to find the required drink row. 
      Do not rely on the exact order of the drinks. 
  */
});
