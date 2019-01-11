const I = actor();

module.exports = {
    criteria: '//header[@class="site-header"]//form[contains(@class, "search-bar")][@role="search"]/input[@type="search"]',
    results: '//div[contains(@class, "product-search-result")]',
    firstFoundCategory: '//div[contains(@class, "item")]/div[contains(@class, "item-info")]/div[contains(@class, "item-name")]/strong[text()="Categories"]/../../../following-sibling::div[contains(@class, "item")][1]',
    foundCategoryResult: '//h1[contains(@class, "section-header")]',
    firstFoundProduct: '//div[contains(@class, "item")]/div[contains(@class, "item-info")]/div[contains(@class, "item-name")]/strong[text()="Products"]/../../../following-sibling::div[contains(@class, "item")][1]',
    foundProductResult: '//div[contains(@class, "grid-item")]/h2[@itemprop="name"]'
};