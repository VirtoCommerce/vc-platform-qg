Feature("Adding,changing and removing address");

Before(I => {
    I.amOnPage(I.sites.storefront);
    I.signIn();
});

Scenario("[Positive] Adding a new address", (I, createAddressPage) => {
  I.click({ binding: "customer.firstName || customer.userName" });
  I.click(
    locate("a")
      .withText("Addresses")
      .inside(locate("li"))
  );
  I.click(locate("button").withText("Add new Address"));
  createAddressPage.sendNewAddressForm(
    "Ivan",
    "Petrov",
    "Company_name",
    "Street_name",
    "3",
    "Town_name",
    "Canada",
    "Alberta",
    "3232"
  );
  I.see(
    "Ivan Petrov, Company_name, Canada, Alberta, Town_name Street_name, 33232",
    { repeater: "item in $ctrl.addresses" }
  );
});

Scenario("[Positive] Changing an existing address", (I, createAddressPage) => {
  I.click({ binding: "customer.firstName || customer.userName" });
  I.click(
    locate("a")
      .withText("Addresses")
      .inside(locate("li"))
  );
  I.click(
    locate("a")
      .withText("Edit")
      .inside(
        locate("li")
          .withChild("div")
          .withText(
            "Ivan Petrov, Company_name, Canada, Alberta, Town_name Street_name, 33232"
          )
      )
  );
  I.fillField(createAddressPage.addressForm.firstName, "Alexander");
  I.fillField(createAddressPage.addressForm.city, "Town_name2");
  I.click(locate("button").withText("Update Address"));
  I.see(
    "Alexander Petrov, Company_name, Canada, Alberta, Town_name2 Street_name, 33232",
    { repeater: "item in $ctrl.addresses" }
  );
});

Scenario("[Positive] Removing an existing address", I => {
  I.click({ binding: "customer.firstName || customer.userName" });
  I.click(
    locate("a")
      .withText("Addresses")
      .inside(locate("li"))
  );
  I.click(
    locate("a")
      .withText("Delete")
      .inside(
        locate("li")
          .withChild("div")
          .withText(
            "Alexander Petrov, Company_name, Canada, Alberta, Town_name2 Street_name, 33232"
          )
      )
  );
  I.acceptPopup();
  I.dontSee(
    "Alexander Petrov, Company_name, Canada, Alberta, Town_name2 Street_name, 33232",
    { repeater: "item in $ctrl.addresses" }
  );
});
