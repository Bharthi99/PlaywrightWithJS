import { test, chromium, firefox } from "@playwright/test"

test("Red Bus and Flipkart in Edge and Firefox Browser Instances", async () => {
  const browser1 = await chromium.launch({ channel: "msedge" });
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();
  await page1.goto("https://www.redbus.in/");
  const redBusTitle = await page1.title();
  console.log(redBusTitle);
  const redBusUrl = page1.url();
  console.log(redBusUrl);


  const browser2= await firefox.launch();
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();
  await page2.goto("https://www.redbus.in/");
  const flipkartTitle = await page2.title();
  console.log(flipkartTitle);
  const flipkartUrl = page1.url();
  console.log(flipkartUrl);
});