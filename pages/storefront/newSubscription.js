const I = actor();

module.exports = {
    product: '//*[@id="electronics"]/main/div[5]/div[5]/a',
    addToCartButton: '//button[@id="addToCart"]',
    shoppingCart: {
        item: '//form[@name="formCart"]/div[contains(@class, "cart-row")][contains(@ng-repeat, "lineItem")]',
        checkOutButton: '//button[@ng-click="submitCart()"]'
    },
    customer: {
        email: '//input[@id="Email"]',
        firstName: '//input[@id="FirstName"]',
        lastName: '//input[@id="LastName"]',
        company: '//input[@id="Organization"]',
        address: '//input[@id="Line1"]',
        city: '//input[@id="City"]',
        country: '//select[@name="Country"]/option[2]',
        region: '//select[@name="Region"]/option[2]',
        postalCode: '//input[@id="PostalCode"]',
        iWantThisToBeRecurringOrder: '//div[@class="switch"]',
        autoReorderType: {
            everyDay: '//select[@id="pplan"]/option[1]'
        },
        shippingMethodButton: '//button/span[text()="Shipping method"]/..'
    },
    shippingMethods: {
        fixedRateGround: '//label[@for="FixedRate:Ground"]'
    },
    paymentMethodButton: '//button/span[text()="Payment method"]/..',
    createOrderButton: '//button/span[text()="Create order"]/..',
    subscriptionInfo: '//table[@class="vc-product-table"]/tbody/tr[contains(@class, "product-row")]/td/div/span',
    myAccountInsets: {
        orders: '//ul[contains(@class, "nav-tabs")]/li/a[text()="Orders"]',
        subscriptions: '//ul[contains(@class, "nav-tabs")]/li/a[text()="Subscriptions"]'
    },
    subscriptionsList: '//table[contains(@class, "full")]',
    created: '//table/tbody/tr[1]/td[1]/a'
};