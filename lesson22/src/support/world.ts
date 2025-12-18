import { BrowserContext, Page } from 'playwright';

export class CustomWorld {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
    public attach(_screenshot: Buffer<ArrayBufferLike>, arg1: string) {
        throw new Error('Method not implemented.');
    }
    public context!: BrowserContext;
    public page!: Page;
}
