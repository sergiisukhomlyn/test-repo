import { Page } from 'playwright';

export abstract class BasePage {
    protected constructor(protected page: Page) {}
}
