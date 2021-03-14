const puppeteer = require("puppeteer");

const fillForm = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://sso.onepoint.copass.fr/realms/employee/protocol/openid-connect/auth?response_type=code&client_id=copass-employee-front&state=fnppSDBWQk0xTXI1X05fTEYuZWVReDVMNmdZZzZBQk9DQVdlWUZtZ2pqTkUz&redirect_uri=https%3A%2F%2Femployee.onepoint.copass.fr&scope=openid%20profile%20email%20offline_access&code_challenge=ZjToOIw2Wi8yMkU8EEHrLks_cXvMBXzq2PSb6AQ9yZk&code_challenge_method=S256&nonce=fnppSDBWQk0xTXI1X05fTEYuZWVReDVMNmdZZzZBQk9DQVdlWUZtZ2pqTkUz"
  );
  // LOGIN
  await page.type("#username", "yourUsername");
  await page.type("#password", "yourPassword");
  await page.click("#kc-login");

  // LOGIN

  //   await page.click(".home-menu:first-child");
  await page.waitFor(2000);
  await page.click(
    "body > cop-main.top-container:nth-child(1) > div.main-container > cop-copass-home:nth-child(2) > div.page-home:nth-child(1) > div.home-header-navigation:nth-child(3) > div.home-menu:nth-child(2) > div.menu-item:nth-child(1) > a.menu-item-link"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main.top-container:nth-child(1) > div.main-container > cop-statement:nth-child(2) > div.page-statement > div.statement-content:nth-child(2) > div.cop-container > label.radio-label.statement-label:nth-child(5)"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main.top-container:nth-child(1) > div.main-container > cop-statement:nth-child(2) > div.page-statement > div.statement-content:nth-child(2) > div.cop-container > div.page-actions:nth-child(6) > button.cop-btn.cop-btn-fill:nth-child(2)"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main.top-container:nth-child(1) > div.main-container > cop-survey:nth-child(2) > div.survey-container:nth-child(2) > div.cop-container:nth-child(2) > form.ng-untouched.ng-pristine.ng-invalid:nth-child(1) > div:nth-child(2) > div.survey-question > div.question-answer:nth-child(4) > label.choice-label.choice-label--single:nth-child(2)"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main > div > cop-survey > div > div.cop-container > div > button.cop-btn.cop-btn-fill"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main.top-container:nth-child(1) > div.main-container > cop-survey:nth-child(2) > div.survey-container:nth-child(2) > div.cop-container:nth-child(2) > form.ng-untouched.ng-pristine.ng-invalid:nth-child(1) > div:nth-child(2) > div.survey-question > div.question-answer:nth-child(4) > label.choice-label.choice-label--single:nth-child(2)"
  );
  await page.click(
    "body > cop-main > div > cop-survey > div > div.cop-container > div > button.cop-btn.cop-btn-fill"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main > div > cop-survey > div > div.cop-container > form > div > div > div:nth-child(11) > label"
  );
  await page.click(
    "body > cop-main > div > cop-survey > div > div.cop-container > div > button.cop-btn.cop-btn-fill"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main > div > cop-survey > div > div.cop-container > form > div > div > div:nth-child(4) > label"
  );
  await page.click(
    "body > cop-main > div > cop-survey > div > div.cop-container > div > button.cop-btn.cop-btn-fill"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main > div > cop-thank-you > div > cop-transition-page > div > div > div.transition-action > div > div > cop-button-w-loader > button"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main > div > cop-success > cop-transition-page > div > div > div.transition-action > div > div > button"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main > div > cop-copass-home > div > div.home-header-navigation > div.home-menu > div:nth-child(3) > a"
  );
  await page.waitFor(2000);
  await page.click(
    "body > cop-main > div > cop-survey-back-to-office > div > div > div > div > div > div.cop-container.onboarding-content > form > div > div:nth-child(3) > label"
  );
  await page.click(
    "body > cop-main > div > cop-survey-back-to-office > div > div > div > div > div > div.page-actions > button.cop-btn.cop-btn-fill"
  );
  await page.waitFor(3000);
  await page.close();
};

fillForm();
