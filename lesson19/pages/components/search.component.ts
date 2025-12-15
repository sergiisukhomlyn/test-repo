import { Locator, Page } from '@playwright/test';

export class SearchComponent {
    private readonly page: Page;
    public readonly input: Locator;
    public readonly searchBtn: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.input = page.locator('input.search-form__input');
        this.searchBtn = page.locator('button.search-form__submit');
    }

    public async search(text: string): Promise<void> {
        await this.input.fill(text);
        await this.searchBtn.click();
    }
}
