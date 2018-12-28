/// <reference path="../steps.d.ts" />

Feature('As logged user I should be able add product to the wish list');

Before((I) => {
    I.amOnPage('');
    I.signIn();
});

Scenario('[Positive] I am try add first one', async (I, addProduct, modalDialogFragment) => {

    I.click(addProduct.firstProduct);

    I.scrollPageToBottom();
    I.waitForElement(addProduct.productInfo.addToWishlistButton);
    I.waitForVisible(addProduct.productInfo.addToWishlistButton);
    I.waitForClickable(addProduct.productInfo.addToWishlistButton);
    I.click(addProduct.productInfo.addToWishlistButton);

    I.waitForElement(addProduct.productInfo.wishListElement, 15);
    I.click(addProduct.productInfo.wishListElement);
    I.click(modalDialogFragment.modalDialog.pleaseSelectList.addToList);
    I.click(modalDialogFragment.modalDialog.viewYourListButton);

    I.see('MY ACCOUNT', addProduct.myAccount);
    I.click(addProduct.listsInset);

    I.see('Private lists', addProduct.privateLists);
    I.click(addProduct.wishList);

    I.click(addProduct.addToCart);
});