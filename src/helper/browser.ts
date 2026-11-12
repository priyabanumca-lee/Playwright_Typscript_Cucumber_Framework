import { chromium, webkit,firefox, LaunchOptions } from "playwright";

const options:LaunchOptions = {
    headless:false,
    // slowMo: 1000,
    args:['--start-maximized']
}

export const invokeBrowser = () => {
    const browserType = process.env.BROWSER || 'chrome';
    switch (browserType.toLowerCase()) {
        case 'chrome':
            return chromium.launch(options);
        case 'firefox':
            return firefox.launch(options);
        case 'webkit':
            return webkit.launch(options);
        default:
            throw new Error(`Unsupported browser: ${browserType}`);
    }
}