const I = actor();

module.exports = {
    inset: '//ul[@id="accessibleNav"]/li/a[text()="Bulk Order"]',
    firstProduct: {
        sku: '3DRSOLO',
        skuInput: '//input[@ng-model="bulkOrder.skuRows[0].Sku"]',
        quantity: '2',
        quantityInput: '//input[@name="[0].Quantity"]'
    },
    secondProduct: {
        sku: 'DJS900SWOCWK',
        skuInput: '//input[@ng-model="bulkOrder.skuRows[1].Sku"]',
        quantity: '4',
        quantityInput: '//input[@name="[1].Quantity"]'
    },
    addToCartButton: '//button[@ng-required="atLeastOneNotEmpty();"][text()="Add to cart"]',
    shoppingCart: {
        checkProductQuantity: function (sku, quantity) {
            I.waitForValue('//img[contains(@src, "' + sku + '")]/../../../../following-sibling::div/div/div/div/input', quantity, 10);
        }
    }
};