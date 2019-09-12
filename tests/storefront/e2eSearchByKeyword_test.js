/// <reference path="../steps.d.ts" />

Feature('Search By Keyword');

Scenario('[Positive] Search category and product by criteria', async (I, search, headerPage) => {
    I.amOnPage('');
    //enter in search input
    I.fillField(headerPage.searchInput, 'sony');
    I.waitForElement(search.results, 15);
    I.seeElementInDOM(search.results);
    //Check category
    var firstFoundCategoryText = await I.grabTextFrom(search.firstFoundCategory);
    console.log(firstFoundCategoryText);
    I.click(search.firstFoundCategory);
    I.waitForElement(search.foundCategoryResult);
    I.see(firstFoundCategoryText.toUpperCase(), search.foundCategoryResult);
    //enter in search input
    I.fillField(headerPage.searchInput, 'sony');
    I.waitForElement(search.results, 15);
    I.seeElementInDOM(search.results);
    //Check product
    var firstFoundProductText = await I.grabTextFrom(search.firstFoundProduct);
    console.log(firstFoundProductText);
    I.click(search.firstFoundProduct);
    I.waitForElement(search.foundProductResult);
    I.see(firstFoundProductText.toUpperCase(), search.foundProductResult);
});