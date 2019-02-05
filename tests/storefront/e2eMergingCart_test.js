/// <reference path="../steps.d.ts" />

Feature('Merging Cart');

Before((I, mergingCart, modalDialogFragment) => {
    I.amOnPage('');

    I.scrollPageToBottom();
    I.click(mergingCart.firstProductAddToCartButton);
    I.click(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton);

    I.wait(15);
    I.seeElement(mergingCart.shoppingCartTitle);
    I.seeElement(mergingCart.cartItem);

    I.signIn();
});

Scenario('[Positive] First step', async (I, mergingCart) => {
    I.wait(15);
    //I.waitForVisible(mergingCart.cartButton);
    I.click(mergingCart.cartButton);
    I.wait(15);
    I.seeElementInDOM(mergingCart.authorizedUserMark);
    I.seeElement(mergingCart.cartItem);
});