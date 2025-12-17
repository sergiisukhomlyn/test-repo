import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world.ts';

Given('пользователь открывает сайт Rozetka', async function (this: CustomWorld) {
    await this.page.goto('https://rozetka.com.ua');
});

When(
    'пользователь ищет товар {string}',
    async function (this: CustomWorld, product: string) {
        await this.page.fill('input[name=\'search\']', product);
        await this.page.press('input[name=\'search\']', 'Enter');
    }
);

Then('отображаются результаты поиска', async function (this: CustomWorld) {
    const products = await this.page.locator('[data-goods-id]');
    await expect(products.first()).toBeVisible();
});
