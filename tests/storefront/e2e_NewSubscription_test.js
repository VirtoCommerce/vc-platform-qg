/// <reference path="../steps.d.ts" />

Feature('New subscription');

Scenario('[Positive] Create', async (I, newSubscription, modalDialogFragment) => {
    I.amOnPage('');
    I.signIn();

    //click on product
    I.waitForElement(newSubscription.product, 5);
    I.pressKey("Pagedown");

    I.waitForElement(newSubscription.product);
    I.click(newSubscription.product);
    await I.click(newSubscription.addToCartButton);

    I.waitForElement(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton, 5);
    I.click(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton);

    I.seeInCurrentUrl("/cart");
    I.scrollPageToBottom();
    I.waitForElement(newSubscription.shoppingCart.item, 5);

    I.waitForEnabled(newSubscription.shoppingCart.checkOutButton,5);
    I.click(newSubscription.shoppingCart.checkOutButton);

    I.wait(3);
    I.seeInCurrentUrl("/checkout");

    var c = newSubscription.customer;
    I.waitForElement(c.email, 10);
    I.fillField(c.email, I.customerInfo.email);
    I.fillField(c.firstName, I.customerInfo.firstName);
    I.fillField(c.lastName, I.customerInfo.lastName);
    I.fillField(c.company, I.customerInfo.company);
    I.fillField(c.address, I.customerInfo.address);
    I.fillField(c.city, I.customerInfo.city);

    I.click(c.country);

    I.waitForEnabled(c.region, 10);
    I.click(c.region);

    I.waitForEnabled(c.postalCode, 10);
    I.fillField(c.postalCode, I.customerInfo.postalCode);

    I.waitForEnabled(c.iWantThisToBeRecurringOrder, 10);
    I.click(c.iWantThisToBeRecurringOrder);

    I.waitForEnabled(c.autoReorderType.everyDay, 10);
    I.click(c.autoReorderType.everyDay);

    I.scrollPageToBottom();
    I.wait(3);
    I.click(c.shippingMethodButton);

    I.waitForElement(newSubscription.shippingMethods.fixedRateGround, 10);
    I.wait(5);
    I.click(newSubscription.shippingMethods.fixedRateGround);

    I.waitForEnabled(newSubscription.paymentMethodButton, 10);
    I.wait(5);
    I.click(newSubscription.paymentMethodButton);

    I.wait(5);
    I.waitForEnabled(newSubscription.createOrderButton, 10);
    I.click(newSubscription.createOrderButton);

    I.waitForElement(newSubscription.myAccountInsets.subscriptions, 10);
    I.click(newSubscription.myAccountInsets.subscriptions);

    I.waitForElement(newSubscription.subscriptionsList, 15);
    I.click(newSubscription.created);
});