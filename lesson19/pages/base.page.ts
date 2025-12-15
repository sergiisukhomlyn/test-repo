import { Page } from '@playwright/test';
import { SearchComponent } from './components/search.component';

export class BasePage {
    protected page: Page;
    public search: SearchComponent;

    public constructor(page: Page) {
        this.page = page;
        this.search = new SearchComponent(page);
    }
}

