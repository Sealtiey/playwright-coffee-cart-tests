export class MenuPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://coffee-cart.app');
  }
}