const I = actor();

module.exports = {
    storeSelector: '//div[@class="head-switch"]/span[contains(text(), "Store:")]',
    currency: {
        selector: '//div[@class="currency"]/span/span',
        eur: {
            sign: '€',
            selector: '//div[@class="currency"]/ul/li/a[text()="EUR"]'
        }
    },
    language: '//div[@class="language"]/span[contains(text(), "Language")]',
    deutsch: '//div[@class="language"]/ul/li/a[contains(text(), "Deutsch")]',
    cellPhoneTab: '//*[@id="accessibleNav"]/li[3]',
    firstProduct: '//div[@class="product-grid-image"]',
    productDetails: {
        brand: '//div[@class="properties"]/dl[1]/dt',
        brandDE: 'Marke',
        displaySize: '//div[@class="properties"]/dl[3]/dt',
        displaySizeDE: 'Bildschirmgröße',
        weAlsoRecommend: '//body/main/span[@class="h1"]',
        weAlsoRecommendDE: 'WIR EMPFEHLEN AUSSERDEM',
        comparePrice: '//span[@id="comparePrice"]',
        comparePriceDE: 'SPEICHERN',
        price: '//span[@id="productPrice"]/small'
    }
};