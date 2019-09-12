const I = actor();

module.exports = {
    results: '//div[contains(@class, "product-search-result")]',

    firstFoundCategory: '//div[@ng-repeat="suggestion in categorySuggestions"]//div//div[1]',
    foundCategoryResult: '//h1[contains(@class, "section-header")]',

    firstFoundProduct: '//div[@ng-repeat="suggestion in productSuggestions"][1]//div//div',
    foundProductResult: '//div[contains(@class, "grid-item")]/h2[@itemprop="name"]'
};