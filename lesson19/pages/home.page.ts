import { BasePage } from './base.page';

export class HomePage extends BasePage {
    // opens main page
    public async open(): Promise<void> {
        await this.page.goto('/');
    }

    // goes to laptop pages
    public async goToNotebooks(): Promise<void> {
        await this.page.goto('/ua/notebooks/c80004/');
    }
}
