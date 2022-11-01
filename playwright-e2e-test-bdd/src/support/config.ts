import { LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
    slowMo: 0,
    timeout: 20000,
    headless: true,
};
const config = {
    browserOptions: browserOptions,
    tracing: true,
};
export default config;
