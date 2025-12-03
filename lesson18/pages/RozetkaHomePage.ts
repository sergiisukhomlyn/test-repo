import { Page, Locator } from "@playwright/test";

export class RozetkaHomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly catalogButton: Locator;
  readonly cartButton: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchInput = page.locator("input[name='search']");
    this.searchButton = page.locator("button.button_color_green");
    this.catalogButton = page.locator("button.menu-toggler");
    this.cartButton = page.locator("rz-cart button");
    this.loginButton = page.locator("rz-user button");
  }

  async goto() {
    await this.page.goto("https://rozetka.com.ua/");
  }

  async search(product: string) {
    await this.searchInput.fill(product);
    await this.searchButton.click();
  }
}