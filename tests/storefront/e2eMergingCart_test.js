/// <reference path="../steps.d.ts" />

Feature('Merging Cart');

Before((I, mergingCart, modalDialogFragment) => {
    I.amOnPage(I.sites.storefront);

    I.scrollPageToBottom();
    I.click(mergingCart.firstProductAddToCartButton);
    I.click(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton);

    I.seeElement(mergingCart.shoppingCartTitle);
    I.seeElement(mergingCart.cartItem);

    I.signIn();
});

Scenario('[Positive] First step', async (I, mergingCart) => {
    I.waitForVisible(mergingCart.cartButton);
    I.click(mergingCart.cartButton);
    I.seeElementInDOM(mergingCart.authorizedUserMark);
    I.seeElement(mergingCart.cartItem);
});