/// <reference path="../steps.d.ts" />

Feature('New subscription');

Scenario('[Positive] Create', async (I, newSubscription, modalDialogFragment) => {
    I.amOnPage(I.sites.storefront);
    I.signIn();
    
    I.click(newSubscription.product);
    I.scrollPageToBottom();
    I.click(newSubscription.addToCartButton);

    I.waitForClickable(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton, 15);
    I.click(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton);
    
    I.seeElementInDOM(newSubscription.shoppingCart.item);
    I.scrollPageToBottom();
    I.click(newSubscription.shoppingCart.checkOutButton);

    var c = newSubscription.customer;
    I.fillField(c.email, I.customerInfo.email);
    I.fillField(c.firstName, I.customerInfo.firstName);
    I.fillField(c.lastName, I.customerInfo.lastName);
    I.fillField(c.company, I.customerInfo.company);
    I.fillField(c.address, I.customerInfo.address);
    I.fillField(c.city, I.customerInfo.city);
    I.click(c.country);
    I.click(c.region);
    I.fillField(c.postalCode, I.customerInfo.postalCode);
    
    I.click(c.iWantThisToBeRecurringOrder);

    await I.waitForElement(c.autoReorderType.everyDay, 10);
    I.click(c.autoReorderType.everyDay);
    I.scrollPageToBottom();
    var info = await I.grabTextFrom(newSubscription.subscriptionInfo);
    await I.waitForClickable(c.shippingMethodButton, 15);
    await I.click(c.shippingMethodButton);

    await I.click(newSubscription.shippingMethods.fixedRateGround);
    await I.waitForClickable(newSubscription.paymentMethodButton, 15);
    await I.click(newSubscription.paymentMethodButton);
    
    await I.waitForClickable(newSubscription.createOrderButton, 15);
    I.click(newSubscription.createOrderButton);

    I.click(newSubscription.myAccountInsets.subscriptions);
    await I.waitForElement(newSubscription.subscriptionsList);
    I.click(newSubscription.created);
});