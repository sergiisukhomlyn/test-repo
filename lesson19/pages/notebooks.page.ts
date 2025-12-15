import { BasePage } from './base.page';
import { ProductCardComponent } from './components/product-card.component';
import { Locator } from '@playwright/test';

export class NotebooksPage extends BasePage {
    public get productCards(): Locator {
        return this.page.locator('rz-catalog-tile .goods-tile');
    }

    public getProductCard(n: number): ProductCardComponent {
        return new ProductCardComponent(this.productCards.nth(n));
    }

    public async waitForLoaded(): Promise<void> {
        await this.productCards.first().waitFor({ state: 'attached' });
        await this.productCards.count();
    }
}
