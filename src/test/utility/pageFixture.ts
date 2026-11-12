import { Page } from 'playwright';
import { Logger } from 'winston';

let page:Page;
let logger:Logger;

export const pageFixture = {
    // page : undefined as unknown as Page
    // @ts-ignore
    page : undefined as Page ,
     // @ts-ignore
    logger: undefined as Logger
}