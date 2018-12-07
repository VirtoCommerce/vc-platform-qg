const I = actor();

module.exports = {

    // insert your locators and methods here
    productList:
        {
            productListItem:
                {
                    addToCardButton: "//button[@title='Add to cart']"
                },
            inputFixedRateGround: "//input[contains(@id,'FixedRate:Ground')]"

        }
}
