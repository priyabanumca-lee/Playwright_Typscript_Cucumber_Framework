import {Browser, BrowserContext, Page, chromium} from "playwright";
import {BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep, Status} from "@cucumber/cucumber";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../../helper/browser";
import { getEnv } from "../../helper/env/env";
import { options } from "./logger";
import { createLogger } from "winston";

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function() {
    getEnv();
    browser = await invokeBrowser();
    context= await browser.newContext();
    page = await context.newPage();
    pageFixture.page = page;
    
});

Before(async function({pickle}) {
    console.log("Before hook executed");
    let scenarioName = pickle.name+pickle.id;
    pageFixture.logger = createLogger(options(scenarioName));
});

// After(async function() {
//     console.log("After hook executed");
// });

// BeforeStep(async function() {
//     console.log("BeforeStep hook executed");
// });

AfterStep(async function({pickle,result}) {
    // console.log("AfterStep hook executed");
    if(result.status === Status.FAILED) {
       const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const image = await pageFixture.page.screenshot({path: `reports/screenshots/${timestamp}.png`, type:'png'});
    this.attach(image, "image/png"); 
    }
    
});

AfterAll(async function() {
    
    await pageFixture.page.close();
    await context.close();
    await browser.close();
    console.log("AfterAll hook executed");
});


