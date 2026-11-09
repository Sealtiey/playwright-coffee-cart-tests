import { test, expect } from '@playwright/test';

test('Discounted Mocha added to the Cart after promo rejecting', async ({
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
  6. Click the button "Nah, I'll skip."
  7. Click one the "Cart" link
  8. Wait for the URL https://coffee-cart.app/cart 
  9. Assert the "Espresso" listitem is visible in the cart
  10. Assert the "(Discounted) Mocha" listitem is not visible in the cart
  11. Assert the "Cappuccino" listitem is visible in the cart
  12. Assert the "Americano" listitem is visible in the cart
   
  Tips:
  1. Use double-quotes for messages which contains apostrophe.
    Example: "Nah, I'll skip."
  2. Use filter({hasText: "ItemName"}) to find the required drink row. 
    Do not rely on the exact order of the drinks. 
  */
});
