import {
    Before,
    After,
    BeforeAll,
    AfterAll
} from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { CustomWorld } from './world.js';
import fs from 'fs';
import path from 'path';

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

Before(async function (this: CustomWorld) {
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario) {
    // Если сценарий упал — делаем скриншот
    if (scenario.result?.status === 'FAILED') {
        const screenshot = await this.page.screenshot();

        const dir = path.resolve('reports/screenshots');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Уникальное имя файла на основе имени сценария
        const fileName = scenario.pickle.name.replace(/\s+/g, '_') + '.png';
        const filePath = path.join(dir, fileName);

        fs.writeFileSync(filePath, screenshot);

        // Прикрепляем к Cucumber JSON (для Mochawesome)
        this.attach(screenshot, 'image/png');
    }

    await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});
