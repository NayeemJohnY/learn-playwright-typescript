import { test, expect } from '@playwright/test'


test("GetByRole Checked", async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByRole_checked.html");
    await expect(page.getByRole('checkbox', { checked: true })).toHaveAttribute('name', "subscribe");
});


test("GetByRole Radio Select", async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByRole_checked.html");
    await page.getByRole('radio', { checked: false }).check();
    await expect(page.getByRole('radio', { checked: true })).toHaveAttribute('value', "female");
});

test("GetByRole Div as Checkbox", async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByRole_checked.html");
    await page.getByRole('checkbox', { checked: false }).nth(1).check();
    await expect(page.getByRole('checkbox', { checked: true }).locator('label')).toHaveText('Subscribe to newsletter');
});


test("GetByRole Disabled", async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByRole_disabled.html");
    await expect(page.getByRole('checkbox', { disabled: true })).toHaveAttribute('name', "subscribe");
    await expect(page.getByRole('button', { disabled: true })).toHaveText('Submit');
    await page.getByRole('button', { name: 'Disable Checkbox' }).click();
    await expect(page.locator('.checkbox-container')).toBeDisabled();
    await page.getByRole('button', { name: 'Enable Checkbox' }).click();
    await expect(page.locator('.checkbox-container')).toBeEnabled();
});

test("GetByRole Expanded", async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByRole_expanded.html");
    const locator = page.getByRole('button', { name: 'Toggle Section' });
    await locator.click();
    await expect(locator).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByRole('button', { expanded: true })).toBeVisible();
});


test("GetByRole Hidden", async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByRole_hiddenElement.html");
    const locator = page.getByRole('radio', { name: 'Yes' });
    await locator.click();
    await expect(page.getByRole('button', { includeHidden: true, name: 'Schedule' })).not.toBeVisible();
});


test("GetByRole Level", async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByRole_level.html");
    await expect(page.getByRole('heading', { level: 3 }).first()).toHaveText('Detailed Title');
    await expect(page.getByRole('listitem', { level: 2 }).nth(1)).toHaveText('Sub-item 2.2');
    await expect(page.getByRole('row', { level: 4 })).toContainText('Parent 2');
});



test("GetByRole Selected", async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByRole_selected.html");
    await expect(page.getByRole('tab', { selected: true })).toHaveText('Tab 1');
    await page.getByRole('tab', { selected: false }).first().click();
    await expect(page.getByRole('heading', { level: 2 })).toHaveText('Content of Tab 2');
    expect(await page.getByRole('tab', { selected: false }).allInnerTexts()).toHaveLength(2);
});


test("GetByRole Combined", async ({ page }) => {
    await page.goto("file:///C:/Users/NayeemJohnY/MySpace/Nayeem/Learning/learn-playwright-typescript/html-files/getByRole.html");
    await expect(page.getByRole('heading', { level: 3 }).last()).toHaveText('Another Title');
    await page.getByRole('button', { name: 'Menu' }).click();
    expect(await page.getByRole('menuitem').allInnerTexts()).toEqual(["Option 1", "Option 2"])
    await expect(page.getByRole('paragraph')).toHaveText('Here are more details...');
});