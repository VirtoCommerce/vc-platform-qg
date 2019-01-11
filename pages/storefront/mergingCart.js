const I = actor();

module.exports = {
    firstProductAddToCartButton: '//button[contains(@class, "AddShopCart")]',
    shoppingCartTitle: '//h1[contains(text(), "Shopping Cart")]',
    cartItem: '//div[contains(@class, "cart-row")]',
    cartButton: '//a[span[@class="icon icon-cart"]][contains(@class, "header-cart-btn cart-toggle")]',
    authorizedUserMark: '//span[contains(text(), "Logged in as")]'
};