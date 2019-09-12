Feature("Changing password");

Before(I => {
    I.amOnPage('');
    I.signIn();
});

Scenario("[Negative] as user I can't create new password less than 8 characters", async (I, headerPage, accountPage) => {
        I.seeInCurrentUrl("/en-US");

        I.waitForEnabled(headerPage.enUS_account.openAccount, 10);
        I.click(headerPage.enUS_account.openAccount);

        I.waitForEnabled(accountPage.links.changePassword, 10);
        I.click(accountPage.links.changePassword);

        const changePassword = accountPage.changePasswordForm;

        I.fillField(changePassword.oldPassword, I.credentials.password);
        I.fillField(changePassword.newPassword, "ss");
        I.fillField(changePassword.newPasswordConfirmation, "ss");

        I.click(changePassword.changePasswordButton);
        I.waitForVisible(changePassword.errorForm, 10);

        //I.seeTextEquals("Passwords must be at least 8 characters");
        I.seeElement(changePassword.error1);
        I.seeElement(changePassword.error2);
    }
);

Scenario("[Negative] as user I can't create new password without uppercase character", async (I, headerPage, accountPage) => {
        I.seeInCurrentUrl("/en-US");

        I.waitForEnabled(headerPage.enUS_account.openAccount, 10);
        I.click(headerPage.enUS_account.openAccount);

        I.waitForEnabled(accountPage.links.changePassword, 10);
        I.click(accountPage.links.changePassword);

        const changePassword = accountPage.changePasswordForm;
        I.fillField(changePassword.oldPassword, I.credentials.password);
        I.fillField(changePassword.newPassword, "qwerty1243");
        I.fillField(changePassword.newPasswordConfirmation, "qwerty1243");

        I.click(changePassword.changePasswordButton);
        I.waitForVisible(changePassword.errorForm, 10);

        //I.seeTextEquals("Passwords must have at least one uppercase");
        I.seeElement(changePassword.error1);
    }
);
