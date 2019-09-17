const I = actor();

module.exports = {

    links: {
        changePassword: '//a[@ng-link="[\'PasswordChange\']"]',
        address: '//a[@ng-link = "[\'Addresses\']"]'
    },

    changePasswordForm: {
        oldPassword: '#oldPassword',
        newPassword: "#newPassword",
        newPasswordConfirmation: "#newPassword2",

        errorForm: '//div[@class="note form-error ng-scope"]',
        error1: '//div[@class= "note form-error ng-scope"]/ul/li[1]',
        error2: '//div[@class= "note form-error ng-scope"]/ul/li[2]',

        changePasswordButton: '//button//span[contains( text(), "Change password")]'
    },

    addressForm: {
        addNewAddressButton: '//button//span[contains(text(), "Add new Address")]',
        addAddressButton: '//button//span[contains(text(), "Add Address")]',

        addressesList: '//ul[@class = "list"]',
        addressItem1: '//ul[@class = "list"]//li[1]',

        item1EditLink: '//ul[@class = "list"]//li[1]//a[@ng-click="$ctrl.edit($index)"]',
        item1DeleteLink: '//ul[@class = "list"]//li[1]//a[@ng-click="$ctrl.delete($index)"]',
        updateLink : '//button//span[contains(text(), "Update Address")]',

        item1addressTextBeforeEdit : '//ul[@class="list"]//li[1]//div[contains(text(), "Ivan Petrov")]',
        item1addressTextAfterEdit : '//ul[@class="list"]//li[1]//div[contains(text(), "Peter Angola")]',

        firstName: "#FirstName",
        lastName: "#LastName",
        company: "#Organization",
        addressLine1: "#Line1",
        addressLine2: "#Line2",
        city: "#City",
        country: '//select[@name="Country"]',
        region: '//select[@name="Region"]',
        zip: "#PostalCode"
    },

    createNewAddress(firstName, lastName, company, addressLine1, addressLine2, city, country, region, zip) {
        I.pressKey("Pagedown");
        I.fillField(this.addressForm.firstName, firstName);
        I.fillField(this.addressForm.lastName, lastName);
        I.fillField(this.addressForm.company, company);
        I.fillField(this.addressForm.addressLine1, addressLine1);
        I.fillField(this.addressForm.addressLine2, addressLine2);
        I.fillField(this.addressForm.city, city);
        I.selectOption(this.addressForm.country, country);
        //wait until region option will open
        I.waitForEnabled(this.addressForm.region, 10);
        I.selectOption(this.addressForm.region, region);
        I.fillField(this.addressForm.zip, zip);
        //add new address
        I.click(this.addressForm.addAddressButton);
    },

    updateAddress(firstName, country){
        I.pressKey("Pagedown");
        I.fillField(this.addressForm.firstName, firstName);
        I.selectOption(this.addressForm.country, country);
    }
};

