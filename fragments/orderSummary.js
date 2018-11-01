const I = actor();

module.exports = {


    // insert your locators and methods here
    orderSummary:
        {
            total: "//span[@class = 'ng-binding']",
            codeField: "#CouponCode",
            applyButton: "Apply"

        },


    addCouponCode: function (code) {

        I.fillField(this.orderSummary.codeField, code);
        I.click(this.orderSummary.applyButton);
    },
}
