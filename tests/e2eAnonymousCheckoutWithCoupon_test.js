/// <reference path="./steps.d.ts" />

Feature('Anonymous checkout with coupon');

Scenario('[Positive] as anonymous user I be able to do checkout with coupon', async (I, navigationPage, productListPage, modalDialogFragment, cartItemCountFragment, shippingAdressFragment, orderSummaryFragment) => {

    I.amOnPage("/");
    I.click(navigationPage.accessibleNav.cellPhones);
    I.waitInUrl('/cell-phones');
    I.say("I found first item with button " + locate(productListPage.productList.productListItem.addToCardButton).first());
    I.click(locate(productListPage.productList.productListItem.addToCardButton).first());
    I.waitForElement(modalDialogFragment.modalDialog.modalWIndow);
    I.click(modalDialogFragment.modalDialog.goToCardButton);
    I.waitForElement(cartItemCountFragment.cartItemCount.formItem);
    I.scrollPageToBottom(); // need for move Accept layer to down
    I.click(cartItemCountFragment.cartItemCount.formSubmitButton);

    //------------------------------------------- need to refactoring ---------------------------------------------------

    const totalBefore = await I.grabTextFrom("//span[@class = 'ng-binding']");

    orderSummaryFragment.addCouponCode("test");

    I.dontSee(totalBefore, "//span[@class = 'ng-binding'][1]");

    shippingAdressFragment.sendAddressForm("Alex.Zol@gmail.com","Alex","Zol","st. Kirova", "5", "Moscow", "Russia", "Moscow", "3241234");

    I.waitForElement(productListPage.productList.inputFixedRateGround);

    const totalBeforeFixedRate = await I.grabTextFrom("//span[@class = 'ng-binding'][1]");

    //pause();

    I.click(productListPage.productList.inputFixedRateGround);

    I.dontSee(totalBeforeFixedRate, "//span[@class = 'ng-binding']");

    I.waitForClickable("//button[@class='step__footer__continue-btn btn ng-scope' and contains(.,'Payment method')]");

    I.click("//button[@class='step__footer__continue-btn btn ng-scope' and contains(.,'Payment method')]");

    I.waitForClickable("//button[@class='step__footer__continue-btn btn ng-scope' and contains(.,'Create order')]");

    I.click("//button[@class='step__footer__continue-btn btn ng-scope' and contains(.,'Create order')]");

    //I.waitInUrl("/cart/thanks/");


    //-------------------------------------------------------------------------------------------------------------------



});
