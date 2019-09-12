Feature("Adding,changing and removing address");

Before(I => {
    I.amOnPage('');
    I.signIn();
});

Scenario("[Positive] Adding a new address", (I, headerPage, accountPage) => {
    I.seeInCurrentUrl("/en-US");
    //open account page
    I.waitForEnabled(headerPage.enUS_account.openAccount, 10);
    I.click(headerPage.enUS_account.openAccount);
    //open address
    I.waitForEnabled(accountPage.links.address, 10);
    I.click(accountPage.links.address);

    const address = I.addresses.address1;

    I.waitForEnabled(accountPage.addressForm.addNewAddressButton, 10);
    I.click(accountPage.addressForm.addNewAddressButton);
    I.waitForEnabled(accountPage.addressForm.firstName, 10);
    //enter data
    accountPage.createNewAddress(
        address.firstName,
        address.lastName,
        address.company,
        address.addressLine1,
        address.addressLine2,
        address.city,
        address.country,
        address.region,
        address.zip);

    I.waitForElement(accountPage.addressForm.addressesList, 10);
    I.seeElement(accountPage.addressForm.addressItem1);
    I.seeElement(accountPage.addressForm.item1addressTextBeforeEdit);
});

Scenario("[Positive] Changing an existing address", (I, headerPage, accountPage) => {
    I.seeInCurrentUrl("/en-US");
    //open account page
    I.waitForEnabled(headerPage.enUS_account.openAccount, 10);
    I.click(headerPage.enUS_account.openAccount);
    //open address
    I.waitForEnabled(accountPage.links.address, 10);
    I.click(accountPage.links.address);
    //click on edit
    I.waitForEnabled(accountPage.addressForm.item1EditLink, 10);
    I.click(accountPage.addressForm.item1EditLink);
    I.waitForEnabled(accountPage.addressForm.firstName, 10);

    const address = I.addresses.address2;
    accountPage.updateAddress(
        address.firstName,
        address.country);
    I.click(accountPage.addressForm.updateLink);
    //check that address changed
    I.waitForElement(accountPage.addressForm.addressesList, 10);
    I.seeElement(accountPage.addressForm.item1addressTextAfterEdit);
});

Scenario("[Positive] Removing an existing address", (I, accountPage, headerPage) => {
    I.seeInCurrentUrl("/en-US");
    //open account page
    I.waitForEnabled(headerPage.enUS_account.openAccount, 10);
    I.click(headerPage.enUS_account.openAccount);
    //open address
    I.waitForEnabled(accountPage.links.address, 10);
    I.click(accountPage.links.address);
    //click on delete
    I.waitForEnabled(accountPage.addressForm.item1DeleteLink, 10);
    I.click(accountPage.addressForm.item1DeleteLink);
    I.acceptPopup();
    I.dontSeeElement(accountPage.addressForm.item1addressTextAfterEdit);
});
