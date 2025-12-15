import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { NotebooksPage } from '../pages/notebooks.page';

test.describe('Rozetka: Laptops', () => {

    test('Page load check', async ({ page }) => {
        const home = new HomePage(page);
        const notebooks = new NotebooksPage(page);

        await home.open();
        await home.goToNotebooks();
        await notebooks.waitForLoaded();

        expect(await notebooks.productCards.count()).toBeGreaterThan(0);
    });

    test('First item name check', async ({ page }) => {
        const home = new HomePage(page);
        const notebooks = new NotebooksPage(page);

        await   home.open();
        await home.goToNotebooks();
        await notebooks.waitForLoaded();

        const firstProduct = notebooks.getProductCard(0);
        const title = await firstProduct.getTitle();

        expect(title.length).toBeGreaterThan(5);
    });

    test('Laptop search with search field', async ({ page }) => {
        const home = new HomePage(page);

        await home.open();
        await home.search.search('MacBook Pro 14');

        // check that at least one concurrence found
        const results = page.locator('.goods-tile__title');
        await results.first().waitFor();

        expect(await results.count()).toBeGreaterThan(0);
    });

});
