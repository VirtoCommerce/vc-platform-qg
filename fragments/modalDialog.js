const I = actor();

module.exports = {
    modalDialog: {
        modalWIndow: "//div[contains(@class, 'modal-dialog')]",
        goToCardButton: "//button[@class='btn'][1]",
        viewYourListButton: '//button/span[contains(., "View your list")]',
        pleaseSelectList: {
            addToList: '//button[@ng-click="addProductToList()"]'
        },
        productIsAddedToCart: {
            goToCartButton: '//button/span[contains(., "Go to cart")]'
        }
    }
};