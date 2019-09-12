/// <reference path="../steps.d.ts" />

Feature('Merging Cart');

Scenario('[Positive] Merge cart after login', async (I, modalDialogFragment, mergingCart) => {
    I.amOnPage('');
    //add product before sign in
    I.scrollPageToBottom();
    I.click(mergingCart.firstProductAddToCartButton);
    I.waitForVisible(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton, 15);

    I.click(modalDialogFragment.modalDialog.productIsAddedToCart.goToCartButton);
    I.seeInCurrentUrl("/cart");
    I.seeElementInDOM(mergingCart.cartItem);

    I.signIn();
    I.seeElement(mergingCart.authorizedUserMark);

    //check that cart merged after log in
    I.waitForEnabled(mergingCart.cartButton);
    I.click(mergingCart.cartButton);
    I.seeInCurrentUrl("/cart");

    I.wait(5);
    I.seeElementInDOM(mergingCart.cartItem);
});