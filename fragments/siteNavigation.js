const I = actor();

module.exports = {
    insets: {
        bulkOrder: '//ul[@id="accessibleNav"]/li/a[text()="Bulk Order"]'
    },
    moreMenu: {
        selector: '#moreMenu',
        insets: {
            bulkOrder: '//li[@id="moreMenu"]/ul/li/a[text()="Bulk Order"]'
        }
    }
};