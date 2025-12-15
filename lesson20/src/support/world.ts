import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { setWorldConstructor } from '@cucumber/cucumber';

export class CustomWorld {
    public browser!: Browser;
    public context!: BrowserContext;
    public page!: Page;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    public async init() {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    public async close() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
