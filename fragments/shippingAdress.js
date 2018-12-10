const I = actor();

module.exports = {

    // insert your locators and methods here
    emailForm:
        {
            email: "#Email",
        },

    addressForm:
        {
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

    sendAddressForm(email, firstName, lastName, addressLine1, addressLine2, city, country, region, postalCode) {

        I.fillField(this.emailForm.email, email);

        within(this.addressForm.form, () => {

            I.fillField(this.addressForm.firstName, firstName);
            I.fillField(this.addressForm.lastName, lastName);
            I.fillField(this.addressForm.addressLine1, addressLine1);
            I.fillField(this.addressForm.addressLine2, addressLine2);
            I.fillField(this.addressForm.city, city);
            I.selectOption(this.addressForm.country, country);
            I.waitForElement(this.addressForm.region);
            I.selectOption(this.addressForm.region, region);
            I.fillField(this.addressForm.postalCode, postalCode);
            I.click(this.addressForm.submitButton);

        });
    }
}
