/// <reference path="../steps.d.ts" />

Feature('Multi currency multi language');

Scenario('[Positive] Change language and currency', async (I, storeOptions) => {
    I.amOnPage('');
    await I.moveCursorTo(storeOptions.selector);
    await I.moveCursorTo(storeOptions.language);
    await I.click(storeOptions.deutsch);
    await I.click(storeOptions.firstProduct);

    var brandDE = await I.grabTextFrom(storeOptions.productDetails.brand);
    var displaySizeDE = await I.grabTextFrom(storeOptions.productDetails.displaySize);
    var weAlsoRecommendDE = await I.grabTextFrom(storeOptions.productDetails.weAlsoRecommend);

    I.waitForVisible(storeOptions.productDetails.comparePrice, 10);
    var comparePriceDE = await I.grabTextFrom(storeOptions.productDetails.comparePrice);

    var assert = require('assert');
    assert.equal(brandDE, storeOptions.productDetails.brandDE);
    assert.equal(displaySizeDE, storeOptions.productDetails.displaySizeDE);
    assert.equal(weAlsoRecommendDE, storeOptions.productDetails.weAlsoRecommendDE);
    assert.ok(comparePriceDE.indexOf(storeOptions.productDetails.comparePriceDE) > -1);
    
    await I.moveCursorTo(storeOptions.selector);
    await I.moveCursorTo(storeOptions.currency.selector);
    await I.click(storeOptions.currency.eur.selector);
    await I.click(storeOptions.firstProduct);

    var price = await I.grabTextFrom(storeOptions.productDetails.price);
    assert.ok(price.indexOf(storeOptions.currency.eur.sign) > -1);
});