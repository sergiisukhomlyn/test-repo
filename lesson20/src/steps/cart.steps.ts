import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When(
    'добавляет первый товар в корзину',
    async function (this: CustomWorld) {
        const firstBuyButton = this.page.locator('button.buy-button').first();
        await firstBuyButton.click();
    }
);

Then(
    'товар отображается в корзине',
    async function (this: CustomWorld) {
        await this.page.click('button.header__button--cart');

        const cartItem = this.page.locator('.cart-product');
        await expect(cartItem.first()).toBeVisible();
    }
);
