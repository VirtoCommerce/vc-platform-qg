/// <reference path="./steps.d.ts" />

Feature('Anonymous checkout with coupon');

Scenario('[Positive] as anonymous user I be able to do checkout with coupon', (I, navigationPage, productListPage) => {

    I.amOnPage("/");
    I.click(navigationPage.accessibleNav.cellPhones);
    I.waitInUrl('/cell-phones');
    I.say(locate(productListPage.productList.productListItem.addToCardButton).at(1));

});
