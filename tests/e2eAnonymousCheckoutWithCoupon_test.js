/// <reference path="./steps.d.ts" />

Feature('Anonymous checkout with coupon');

Scenario('[Positive] as anonymous user I be able to do checkout with coupon', async (I, navigationPage, productListPage, modalDialogFragment, cartItemCountFragment, shippingAdressFragment, orderSummaryFragment) => {
    I.amOnPage('');
    I.click(navigationPage.accessibleNav.cellPhones);
    I.waitInUrl('/cell-phones');
    I.say("I found first item with button " + locate(productListPage.productList.productListItem.addToCardButton).first());
    I.click(locate(productListPage.productList.productListItem.addToCardButton).first());
    I.waitForElement(modalDialogFragment.modalDialog.modalWIndow);
    I.click(modalDialogFragment.modalDialog.goToCardButton);
    I.waitForElement(cartItemCountFragment.cartItemCount.formItem);
    I.scrollPageToBottom();
    I.click(cartItemCountFragment.cartItemCount.formSubmitButton);

    const totalBefore = await I.grabTextFrom(shippingAdressFragment.totalSum);
    orderSummaryFragment.addCouponCode("test");
    I.dontSee(totalBefore, shippingAdressFragment.totalSum);
    shippingAdressFragment.sendAddressForm();

    const totalBeforeFixedRate = await I.grabTextFrom(shippingAdressFragment.totalSum);
    I.click(productListPage.productList.inputFixedRateGround);
    I.dontSee(totalBeforeFixedRate, shippingAdressFragment.totalSum);

    I.waitForClickable(shippingAdressFragment.paymentMethodButton);
    I.click(shippingAdressFragment.paymentMethodButton);

    I.waitForClickable(shippingAdressFragment.createOrderButton);
    I.click(shippingAdressFragment.createOrderButton);

    I.waitForElement(productListPage.productList.order, 20);
    var order = await I.grabTextFrom(productListPage.productList.order);
    var number = order.replace('ORDER ', '');
    I.waitInUrl("/cart/thanks/" + number);
});
