import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Page,Browser } from 'playwright';
import { expect } from '@playwright/test';
import { pageFixture } from '../utility/pageFixture';

setDefaultTimeout(30000); // Set default timeout to 60 seconds

Given('I am on the login page', async function () {
    // browser = await chromium.launch({ headless: false });
    // page = await browser.newPage();
    // Added domcontentloaded to prevent hanging on slow page resources
    await pageFixture.page.goto('https://demo.guru99.com/test/newtours/', { waitUntil: 'domcontentloaded' });
    await pageFixture.logger.info('Navigated to the login page'+'https://demo.guru99.com/test/newtours/');
});

When('I enter valid username and password', async function () {
    // Fixed selectors from IDs to name attributes used by Guru99
    await pageFixture.page.fill('[name="userName"]', 'mercury');
    await pageFixture.page.fill('[name="password"]', 'mercury');
    await pageFixture.logger.info('Entered valid username and password'+'userName'+'mercury'+'password'+'mercury');
});

Then('I click on the login button', async function () {
    // Fixed submit button selector
    await pageFixture.page.click('[name="submit"]');
    await pageFixture.logger.info('Clicked on the login button'+'submit');
});

Then('I should be redirected to the dashboard page', async function () {
    const expectedUrl = 'https://demo.guru99.com/test/newtours/login_sucess.php'; // Fixed typo in URL path (success vs sucess)
    
    // Correct Playwright assertion syntax
    await expect(pageFixture.page).toHaveURL(expectedUrl);
    
    console.log('Successfully redirected to the dashboard page.');
    await pageFixture.logger.info('Successfully redirected to the dashboard page.'+'https://demo.guru99.com/test/newtours/login_sucess.php');
});

// When('I enter valid {string} and {string}', (s: string, s2: string) => {
//   // Write code here that turns the phrase above into concrete actions
// })

When('I enter valid {string} and {string}', async(s: string, s2: string) => {
    await pageFixture.page.fill('[name="userName"]', s);
    await pageFixture.page.fill('[name="password"]',s2);
    await pageFixture.logger.info('scenarioOutline_Entered valid username and password'+'userName'+s+'password'+s2);
})

Then('I verify error message for invalid credentials', async function(){
    await pageFixture.page.getByRole('cell', { name: 'Enter your userName and password correct', exact: true }).click();
    // await pageFixture.page.locator('text=Enter your userName and password correct').waitFor({ state: 'visible' });

});

