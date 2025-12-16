import { BasePage } from './base.Page';
import { expect } from '@playwright/test';

export class SearchResultsPage extends BasePage {
    public async isResultsVisible(): Promise<void> {
        const products = this.page.locator('[data-goods-id]');
        await expect(products.first()).toBeVisible();
    }

    public async addFirstProductToCart(): Promise<void> {
        await this.page.locator('text=Купить').first().click();
    }
}
