/// <reference path="../steps.d.ts" />

Feature('New subscription');

Scenario('[Positive] Create', async (I, newSubscription, modalDialogFragment) => {
    I.amOnPage('');
    I.signIn();

    await I.click(newSubscription.product);
    I.scrollPageToBottom();
    I.wait(15);
    //I.waitForElement(newSubscription.addToCartButton, 15);
    await I.click(newSubscription.addToCartButton);

    I.wait(15);
    //I.waitForEnabled(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton, 15);
    await I.click(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton);

    I.seeElementInDOM(newSubscription.shoppingCart.item);
    I.scrollPageToBottom();
    await I.click(newSubscription.shoppingCart.checkOutButton);

    var c = newSubscription.customer;
    I.wait(10);
    I.fillField(c.email, I.customerInfo.email);
    I.fillField(c.firstName, I.customerInfo.firstName);
    I.fillField(c.lastName, I.customerInfo.lastName);
    I.fillField(c.company, I.customerInfo.company);
    I.fillField(c.address, I.customerInfo.address);
    I.fillField(c.city, I.customerInfo.city);
    await I.click(c.country);
    await I.click(c.region);
    I.fillField(c.postalCode, I.customerInfo.postalCode);

    I.waitForElement(c.iWantThisToBeRecurringOrder, 10);
    await I.click(c.iWantThisToBeRecurringOrder);

    I.wait(15);
    //I.waitForElement(c.autoReorderType.everyDay, 10);
    await I.click(c.autoReorderType.everyDay);
    I.scrollPageToBottom();
    I.wait(15);
    //await I.waitForEnabled(c.shippingMethodButton, 15);
    await I.click(c.shippingMethodButton);

    await I.click(newSubscription.shippingMethods.fixedRateGround);
    I.wait(15);
    //await I.waitForEnabled(newSubscription.paymentMethodButton, 15);
    await I.click(newSubscription.paymentMethodButton);

    I.wait(15);
    //await I.waitForEnabled(newSubscription.createOrderButton, 15);
    await I.click(newSubscription.createOrderButton);

    I.wait(15);
    await I.click(newSubscription.myAccountInsets.subscriptions);
    I.wait(15);
    //await I.waitForElement(newSubscription.subscriptionsList, 15);
    await I.click(newSubscription.created);
});