const I = actor();

module.exports = {
    emailForm: {
        email: "#Email"
    },

    addressForm: {
        form: "//form[@name = 'addrForm']",
        firstName: "#FirstName",
        lastName: "#LastName",
        addressLine1: "#Line1",
        addressLine2: "#Line2",
        city: "#City",
        country: "//select[@name='Country']",
        region: "//select[@name='Region']",
        postalCode: "#PostalCode",
        submitButton: "//button[@name='button']"
    },

    user: {
        email: "Alex.Zol@gmail.com",
        firstName: "Alex",
        lastName: "Zol",
        addressLine1: "st. Kirova",
        addressLine2: "5",
        city: "Moscow",
        country: "Russia",
        region: "Moscow",
        postalCode: "3241234"
    },

    totalSum: '//div[@class="list-price"]/span',
    paymentMethodButton: '//button/span[text()="Payment method"]/..',
    createOrderButton: '//button/span[text()="Create order"]/..',

    sendAddressForm() {
        I.fillField(this.emailForm.email, this.user.email);
        within(this.addressForm.form, () => {
            I.fillField(this.addressForm.firstName, this.user.firstName);
            I.fillField(this.addressForm.lastName, this.user.lastName);
            I.fillField(this.addressForm.addressLine1, this.user.addressLine1);
            I.fillField(this.addressForm.addressLine2, this.user.addressLine2);
            I.fillField(this.addressForm.city, this.user.city);
            I.selectOption(this.addressForm.country, this.user.country);
            I.selectOption(this.addressForm.region, this.user.region);
            I.fillField(this.addressForm.postalCode, this.user.postalCode);
            I.click(this.addressForm.submitButton);
        });
    }
};