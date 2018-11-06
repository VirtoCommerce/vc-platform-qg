const I = actor();

module.exports = {

    // insert your locators and methods here
    modalDialog:
        {
            modalWIndow: "//div[contains(@class, 'modal-dialog')]",
            goToCardButton: "//button[@class='btn'][1]",
            viewYourListButton: '//button/span[contains(., "View your list")]',
            pleaseSelectList: {
                addToList: '//button[@ng-click="addProductToList()"]'
            }
        }
}