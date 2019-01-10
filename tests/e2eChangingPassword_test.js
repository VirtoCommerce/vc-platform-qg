Feature("Changing password");

Before(I => {
    I.amOnPage(I.sites.storefront);
    I.signIn();
});

Scenario(
  "[Negative] as user I can't create new password less than 8 characters",
  I => {
    I.click({ binding: "customer.firstName || customer.userName" });
    I.click(
      locate("a")
        .withText("Change password")
        .inside(locate("li"))
    );
    I.fillField("#oldPassword", I.credentials.password);
    I.fillField("#newPassword", "ss");
    I.fillField("#newPassword2", "ss");
    I.click(locate("button").withText("Change password"));
    I.seeTextEquals("Passwords must be at least 8 characters");
  }
);

Scenario(
  "[Negative] as user I can't create new password without uppercase character",
  I => {
    I.click({ binding: "customer.firstName || customer.userName" });
    I.click(
      locate("a")
        .withText("Change password")
        .inside(locate("li"))
    );
    I.fillField("#oldPassword", I.credentials.password);
    I.fillField("#newPassword", "qwerty1234");
    I.fillField("#newPassword2", "qwerty1234");
    I.click(locate("button").withText("Change password"));
    I.seeTextEquals("Passwords must have at least one uppercase");
  }
);
