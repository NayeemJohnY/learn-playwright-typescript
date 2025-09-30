import { test, expect, Browser, Page, BrowserContext, Locator, devices } from '@playwright/test';
import { chromium, firefox, webkit } from '@playwright/test'

async function doLogin(page: Page, username: string, password: string) {
    const emailAddress: Locator = page.getByRole('textbox', { name: 'E-Mail Address' })
    const passwordLocator: Locator = page.getByRole('textbox', { name: 'Password' });
    const loginButton: Locator = page.getByRole('button', { name: 'Login' });

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    await emailAddress.fill(username)
    await passwordLocator.fill(password)
    await loginButton.click()
    await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();
    await page.screenshot({ path: "MyAccount.png" })
}

test("Use Browser Context", async () => {
    const browser: Browser = await chromium.launch({ headless: false });

    const contrastContext: BrowserContext = await browser.newContext({...devices['iPhone 12'] });
    const contrasPage: Page = await contrastContext.newPage();
    await doLogin(contrasPage, "nayeem.john@outlook.com", "Sumaiya@2505")

    const adminContext: BrowserContext = await browser.newContext();
    const adminPage: Page = await adminContext.newPage();
    await doLogin(adminPage, "nayeemjohn@admin.com", "Sumaiya@2505")
});