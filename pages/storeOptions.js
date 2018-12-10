﻿const I = actor();

module.exports = {
    selector: '//div[@class="head-switch"]/span[contains(text(), "Store:")]',
    currency: {
        eur: {
            sign: '€',
            selector: '//div[@class="currency"]/ul/li/a[text()="EUR"]'
        }
    },
    language: '//div[@class="language"]/span[contains(text(), "Language")]',
    deutsch: '//div[@class="language"]/ul/li/a[contains(text(), "Deutsch")]',
    firstProduct: '//*[@id="Electronics"]/main/div[4]/div[1]/a',
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