/// <reference path="../steps.d.ts" />

Feature('Create new user');

Scenario('[Positive] as user I be able to create new account (Alex.Zol)', (I, createAccountPage, headerPage) => {
    I.amOnPage('');
    I.click(headerPage.headerNav.createAnAccount);
    I.waitInUrl(createAccountPage.URLs.account.register);
    createAccountPage.sendNewUserForm();
    I.waitInUrl(createAccountPage.URLs.account.register);
    I.seeElement(locate("span").withText("Logged in as"));

    I.seeTextEquals(createAccountPage.newUser.firstName);

    I.click("Log out");
    I.clearCookie();
});

Scenario('[Negative] as user I be able to create account (Alex.Zol) one more time', (I, createAccountPage, headerPage) => {
    I.amOnPage('');
    I.click(headerPage.headerNav.createAnAccount);
    I.waitInUrl(createAccountPage.URLs.account.register);
    createAccountPage.sendNewUserForm();
    I.waitInUrl(createAccountPage.URLs.account.register);

    I.seeTextEquals("User name '" + createAccountPage.newUser.login + "' is already taken.");
});
