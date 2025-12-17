import { BasePage } from './base.page';

export class HomePage extends BasePage {
    public page: any;
    public async open(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua');
    }

    public async search(product: string): Promise<void> {
        const searchInput = this.page.locator('input[name="search"]');
        await searchInput.fill(product);
        await searchInput.press('Enter');
    }

    public async openCart(): Promise<void> {
        await this.page.click('button.header__button--cart');
    }
}
