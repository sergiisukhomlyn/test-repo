import { Locator } from '@playwright/test';

export class ProductCardComponent {
    public readonly root: Locator;

    public constructor(root: Locator) {
        this.root = root;
    }

    public get title(): Locator {
        return this.root.locator('.goods-tile__title');
    }

    public get price(): Locator {
        return this.root.locator('.goods-tile__price-value');
    }

    public async getTitle(): Promise<string> {
        return this.title.innerText();
    }

    public async getPrice(): Promise<string> {
        return this.price.innerText();
    }
}

