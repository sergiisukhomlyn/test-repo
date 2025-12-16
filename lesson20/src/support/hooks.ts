import {
    Before,
    After,
    BeforeAll,
    AfterAll
} from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { CustomWorld } from './world';

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

Before(async function (this: CustomWorld) {
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
    await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});
