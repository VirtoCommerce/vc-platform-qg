/// <reference path="../steps.d.ts" />

Feature('Create new user');

Scenario('[Positive] as user I be able to create new account (Alex.Zol)', (I, createAccountPage, headerPage) => {

    I.amOnPage("/");
    I.click(headerPage.headerNav.createAnAccount);
    I.waitInUrl('/account/register');
    createAccountPage.sendNewUserForm("Alex","Zol","alex.zol@gmail.com","Alex.Zol","Az1234567");
    I.waitInUrl('/account#/profile');
    I.seeElement(locate("span").withText("Logged in as"));

    I.seeTextEquals("Alex");   // Result

    I.click("Log out");
    I.clearCookie();

});

Scenario('[Negative] as user I be able to create account (Alex.Zol) one more time', (I, createAccountPage, headerPage) => {

    I.amOnPage("/");
    I.click(headerPage.headerNav.createAnAccount);
    I.waitInUrl('/account/register');
    createAccountPage.sendNewUserForm("Alex","Zol","alex.zol@gmail.com","Alex.Zol","Az1234567");
    I.waitInUrl('/account/register');

    I.seeTextEquals("User name 'Alex.Zol' is already taken.");    // Result

});
