/// <reference path="../steps.d.ts" />

Feature('Recovery username/password');

Scenario('[Positive] Recovery username', async (I, recovery) => {
    I.amOnPage('');

    await I.click(I.loginForm.signInLink);
    I.waitForElement(recovery.forgotLoginLink);
    await I.click(recovery.forgotLoginLink);
    I.fillField(recovery.email, 'barbar@example.com');
    await I.click(recovery.submit);
    I.seeElementInDOM(recovery.successMessage);
});

Scenario('[Positive] Recovery password', async (I, recovery) => {
    I.amOnPage('');

    await I.click(I.loginForm.signInLink);
    I.waitForElement(recovery.forgotPasswordLink);
    await I.click(recovery.forgotPasswordLink);
    I.fillField(recovery.email, 'barbar@example.com');
    await I.click(recovery.submit);
    I.seeElementInDOM(recovery.successMessage);
});