Feature("Changing First Name and Last Name in Profile");

Before(I => {
    I.amOnPage('');
    I.signIn();
});

Scenario("[Positive] Changing First and Last Name in Profile", I => {
    I.wait(15);
  I.click({ binding: "customer.firstName || customer.userName" });
  I.fillField("#first_name", "Alex2");
    I.fillField("#last_name", "Starberggg");
    I.wait(15);
  I.click(locate("button").withText("Update"));
  I.see("Alex2", { binding: "customer.firstName || customer.userName" });
});
