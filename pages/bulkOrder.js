const I = actor();

module.exports = {
    inset: '//ul[@id="accessibleNav"]/li/a[text()="Bulk Order"]',
    firstProduct: {
        SKU: '//input[@ng-model="bulkOrder.skuRows[0].Sku"]',
        quantity: '//input[@name="[0].Quantity"]'
    },
    secondProduct: {
        SKU: '//input[@ng-model="bulkOrder.skuRows[1].Sku"]',
        quantity: '//input[@name="[1].Quantity"]'
    },
    addToCartButton: '//button[@ng-required="atLeastOneNotEmpty();"][text()="Add to cart"]',
    shoppingCart: {
        products: {
            first: '//*[@id="Electronics"]/main/div/div[3]/form/div[1]/div/div[2]/div/div[1]/div/input',
            second: '//*[@id="Electronics"]/main/div/div[3]/form/div[2]/div/div[2]/div/div[1]/div/input'
        }
    }
};