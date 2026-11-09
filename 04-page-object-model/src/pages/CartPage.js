export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://coffee-cart.app/cart');
  }

  async waitForLoading() {
    await this.page.waitForURL('https://coffee-cart.app/cart');
  }
  async expectEmptyMessage() {
  await expect(this.page.getByText('No coffee, go add some.')).toBeVisible();
}
}