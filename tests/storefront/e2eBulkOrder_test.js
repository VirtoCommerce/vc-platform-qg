/// <reference path="../steps.d.ts" />

Feature('Bulk order creation');

Scenario('[Positive] Create', async (I, siteNavigation, bulkOrder) => {
    I.amOnPage('');
    var moreMenuExistsOnPage = await I.executeScript(() => document.getElementById('moreMenu') != null);
    if (moreMenuExistsOnPage) {
        I.moveCursorTo(siteNavigation.moreMenu.selector);
        I.waitForVisible(siteNavigation.moreMenu.insets.bulkOrder, 5);
        await I.click(siteNavigation.moreMenu.insets.bulkOrder);
    } else {
        await I.click(siteNavigation.insets.bulkOrder);
    }

    I.fillField(bulkOrder.firstProduct.skuInput, bulkOrder.firstProduct.sku);
    I.fillField(bulkOrder.firstProduct.quantityInput, bulkOrder.firstProduct.quantity);

    I.fillField(bulkOrder.secondProduct.skuInput, bulkOrder.secondProduct.sku);
    I.fillField(bulkOrder.secondProduct.quantityInput, bulkOrder.secondProduct.quantity);

    I.scrollPageToBottom();
    await I.click(bulkOrder.addToCartButton);

    bulkOrder.shoppingCart.checkProductQuantity(bulkOrder.firstProduct.sku, bulkOrder.firstProduct.quantity);
    bulkOrder.shoppingCart.checkProductQuantity(bulkOrder.secondProduct.sku, bulkOrder.secondProduct.quantity);
});