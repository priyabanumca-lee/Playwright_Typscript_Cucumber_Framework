import { generate } from 'multiple-cucumber-html-reporter';

generate({
    jsonDir: 'reports/json',          // Where Cucumber saves the JSON file
    reportPath: 'reports/html-report',   // Where the interactive chart dashboard will be saved
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest',
        },
        device: 'Local PC',
        platform: {
            name: 'windows',
            version: '11',
        },
    },
    customData: {
        title: 'Test Execution Run',
        data: [
            { label: 'Project', value: 'Playwright Cucumber TS' },
            { label: 'Environment', value: 'QA' },
            { label: 'Execution Time', value: new Date().toLocaleString() },
        ],
    },
});