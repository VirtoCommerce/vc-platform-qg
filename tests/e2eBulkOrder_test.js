/// <reference path="../steps.d.ts" />

Feature('Bulk order creation');

Scenario('[Positive] Create', async (I, bulkOrder) => {
    I.amOnPage('');

    I.waitForElement(bulkOrder.inset, 10);
    I.click(bulkOrder.inset);

    var firstProductQuantity = '2';
    var secondProductQuantity = '4';
    I.fillField(bulkOrder.firstProduct.SKU, '3DRSOLO');
    I.fillField(bulkOrder.firstProduct.quantity, firstProductQuantity);

    I.fillField(bulkOrder.secondProduct.SKU, 'DJS900SWOCWK');
    I.fillField(bulkOrder.secondProduct.quantity, secondProductQuantity);

    I.scrollPageToBottom();
    I.click(bulkOrder.addToCartButton);

    I.waitForValue(bulkOrder.shoppingCart.products.first, secondProductQuantity);
    I.waitForValue(bulkOrder.shoppingCart.products.second, firstProductQuantity);
});