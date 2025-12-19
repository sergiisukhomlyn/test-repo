import { BasePage } from './base.page.js';
import { expect } from '@playwright/test';

export class CartPage extends BasePage {
    public declare page: any;

    public async isProductVisible(): Promise<void> {
        const cartItem = this.page.locator('.cart-product');
        await expect(cartItem.first()).toBeVisible();
    }
}

