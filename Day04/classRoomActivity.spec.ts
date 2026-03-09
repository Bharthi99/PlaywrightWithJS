import { chromium, test, expect } from "@playwright/test"

test("Launch browser", async ({ page }) => {

    await page.goto('https://login.salesforce.com/');
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('#password').fill("TestLeaf@2025");
    await page.locator('#Login').click();

    await expect('span[title="Service"]').toBeTruthy;

    await page.waitForTimeout(3000)

})