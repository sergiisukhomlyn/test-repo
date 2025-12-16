import { BasePage } from './base.Page';
import { expect } from '@playwright/test';

export class CartPage extends BasePage {
    public async isProductVisible(): Promise<void> {
        const cartItem = this.page.locator('.cart-product');
        await expect(cartItem.first()).toBeVisible();
    }
}
