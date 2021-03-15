require("dotenv").config();
const puppeteer = require("puppeteer");

const fillForm = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(process.env.COPASS_URL);

  // LOGIN
  await page.type("#username", process.env.USERNAME);
  await page.type("#password", process.env.MAGIC_WORD);
  await page.click("#kc-login");

  // LOGIN

  await page.waitFor(3000);
  await page.click(process.env.UPDATE_FORM_DOM);
  await page.waitFor(2000);
  await page.click(process.env.AGREEMENT_DOM);
  await page.waitFor(2000);
  await page.click(process.env.NEXT_BTN_DOM_1);
  await page.waitFor(2000);
  await page.click(process.env.NO_CONTACT_DOM);
  await page.waitFor(2000);
  await page.click(process.env.NEXT_BTN_DOM_2);
  await page.waitFor(2000);
  await page.click(process.env.NOT_TESTED_POSITIVE_DOM);
  await page.waitFor(2000);
  await page.click(process.env.NEXT_BTN_DOM_2);
  await page.waitFor(2000);
  await page.click(process.env.NO_SYMPTOMS_DOM);
  await page.waitFor(2000);
  await page.click(process.env.NEXT_BTN_DOM_2);
  await page.waitFor(2000);
  await page.click(process.env.IS_PREGNANT_DOM);
  await page.click(process.env.NEXT_BTN_DOM_2);
  await page.waitFor(2000);
  await page.click(process.env.THX_DOM);
  await page.waitFor(2000);
  await page.click(process.env.TRANSITION_DOM);
  await page.waitFor(2000);
  await page.click(process.env.OFFICE_RETURN_DOM);
  await page.waitFor(2000);
  await page.click(process.env.OFFICE_MOTIVATION_DOM);
  await page.click(process.env.OFFICE_MOTIVATION_BTN_DOM);
  await page.waitFor(3000);
  await page.close();
  await browser.close();
};

fillForm();
