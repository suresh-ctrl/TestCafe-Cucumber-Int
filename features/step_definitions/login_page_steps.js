const {Given, When, Then} = require('cucumber');
const loginPage = require('../support/pages/login_pageObjects.js');
const Selector = require('testcafe').Selector;

Given('user navigates to the heroku form page', async function () {
   await testController.navigateTo('https://the-internet.herokuapp.com/login');
});

When('enter username {string} in the username field', async function (username) {
    const usernameField = loginPage.elements.usernametxt();
    await testController.typeText(usernameField, username);
});

When('enter password {string} in the password field', async function (password) {
    const passwordfield = loginPage.elements.passwordtxt();
    await testController.typeText(passwordfield, password);
});

When('click submit', async function () {
    const submitBtn = loginPage.elements.loginButton();
    await testController.click(submitBtn);
});

Then('login successfully message is displayed {string}', async function (message) {
       const messagetxt = loginPage.elements.flashMessage();
       await testController.takeScreenshot('./reports/screenshots');
    // let response = messagetxt.innerText;
    // await testController.response.match(message);
});
    