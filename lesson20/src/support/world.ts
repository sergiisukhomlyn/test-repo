import { BrowserContext, Page } from 'playwright';

export class CustomWorld {
    public context!: BrowserContext;
    public page!: Page;
}
