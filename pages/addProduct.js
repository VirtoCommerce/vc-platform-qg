const I = actor();

module.exports = {
    firstProduct: '//a[@class="product-grid-item Click"][1]',
    productInfo: {
        addToWishlistButton: '#addToWishlist',
        wishListElement: '//div/span[contains(., "wish")]'
    },
    URLs: {
        home: '/cart'
    },
    myAccount: '//h1[@class="h2"]',
    listsInset: '//ul/li/a[contains(., "Lists")]',
    privateLists: '//vc-account-lists/div/ul/li/a[contains(., "Private lists")]',
    wishList: '//aside/ul/li/a[contains(., "wish")]',
    addToCart: '#addToCart'
};