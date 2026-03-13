import { test, expect } from "@playwright/test"

test("Create a lead", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr2");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("#button").click();
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    await page.locator('#createLeadForm_companyName').fill("IBM");
    await page.locator("#createLeadForm_generalProfTitle").fill("Ms");
    await page.locator('#createLeadForm_firstName').nth(0).fill("Bharati");
    await page.locator('#createLeadForm_lastName').nth(0).fill("Lingegowda");
    await page.locator("#createLeadForm_generalProfTitle").fill("8 LPA");
    await page.locator("#createLeadForm_departmentName").fill("QA");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9980030243");
    await page.locator('input[name="submitButton"]').click();

    const title = await page.title();
    console.log("Page Title is:", title);

    await page.waitForTimeout(3000);


});