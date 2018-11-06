/// <reference path="../steps.d.ts" />

Feature('Add product');

Scenario('[Positive] First one', async (I, addProduct, modalDialogFragment) => {
    I.amOnPage('account/login');
    
    within('#customer_login', () => {
        I.fillField('#customer_user_name', 'admin');
        I.fillField('#customer_password', 'store');
        I.click('input[type="submit"]');
    });

    I.amOnPage('');

    I.click(addProduct.firstProduct);

    I.scrollPageToBottom();
    I.waitForVisible(addProduct.productInfo.addToWishlistButton);
    I.waitForClickable(addProduct.productInfo.addToWishlistButton);
    I.click(addProduct.productInfo.addToWishlistButton);

    I.click(addProduct.productInfo.wishListElement);
    I.click(modalDialogFragment.modalDialog.pleaseSelectList.addToList);
    I.click(modalDialogFragment.modalDialog.viewYourListButton);

    I.see('MY ACCOUNT', addProduct.myAccount);
    I.click(addProduct.listsInset);

    I.see('Private lists', addProduct.privateLists);
    I.click(addProduct.wishList);

    I.click(addProduct.addToCart);
});