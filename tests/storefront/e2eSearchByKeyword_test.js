/// <reference path="../steps.d.ts" />

Feature('Search By Keyword');

Scenario('[Positive] Search category and product by criteria', async (I, search) => {
    I.amOnPage('');
    I.fillField(search.criteria, 'sony');
    I.wait(15);
    I.seeElementInDOM(search.results);

    var firstFoundCategoryText = await I.grabTextFrom(search.firstFoundCategory);
    I.click(search.firstFoundCategory);
    I.see(firstFoundCategoryText.toUpperCase(), search.foundCategoryResult);

    I.fillField(search.criteria, 'sony');
    I.wait(15);
    I.seeElementInDOM(search.results);

    var firstFoundProductText = await I.grabTextFrom(search.firstFoundProduct);
    I.click(search.firstFoundProduct);
    I.see(firstFoundProductText.toUpperCase(), search.foundProductResult);
});