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

    var firstProductQuantity = '2';
    var secondProductQuantity = '4';
    I.fillField(bulkOrder.firstProduct.SKU, '3DRSOLO');
    I.fillField(bulkOrder.firstProduct.quantity, firstProductQuantity);

    I.fillField(bulkOrder.secondProduct.SKU, 'DJS900SWOCWK');
    I.fillField(bulkOrder.secondProduct.quantity, secondProductQuantity);

    I.scrollPageToBottom();
    await I.click(bulkOrder.addToCartButton);
    I.waitForValue(bulkOrder.shoppingCart.products.first, secondProductQuantity, 10);
    I.waitForValue(bulkOrder.shoppingCart.products.second, firstProductQuantity, 10);
});