import { test, expect } from '@playwright/test';
import { log } from 'console';

test("Select DropDown", async ({ page }) => {
    // https://www.lambdatest.com/selenium-playground/
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    const dropdown = 'select[id="dropdown"]'
    const selectedValues = await page.selectOption(dropdown, { value: "2" });
    expect(selectedValues).toEqual(["2"]);
    await page.selectOption(dropdown, { value: "1" });
    await expect(page.locator(`${dropdown} >> option:checked`)).toHaveText('Option 1')

    const options = `${dropdown} > option`
    let allOptions = await page.$$(options)
    log("allOptions", allOptions.length)
    for (let option of allOptions) {
        log(await option.textContent())
    }
    const allLocators = await page.locator(options).all()
    log("allLocators", allLocators.length)
    for (let locator of allLocators) {
        log(await locator.textContent())
    }

});