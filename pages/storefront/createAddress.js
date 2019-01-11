const I = actor();

module.exports = {
  // insert your locators and methods here

  addressForm: {
    firstName: "#FirstName",
    lastName: "#LastName",
    company: "#Organization",
    address1: "#Line1",
    address2: "#Line2",
    city: "#City",
    country: locate("select").withAttr({ name: "Country" }),
    province: locate("select").withAttr({ name: "Region" }),
    zip: "#PostalCode"
  },
  sendNewAddressForm(
    firstName,
    lastName,
    company,
    address1,
    address2,
    city,
    country,
    province,
    zip
  ) {
    I.fillField(this.addressForm.firstName, firstName);
    I.fillField(this.addressForm.lastName, lastName);
    I.fillField(this.addressForm.company, company);
    I.fillField(this.addressForm.address1, address1);
    I.fillField(this.addressForm.address2, address2);
    I.fillField(this.addressForm.city, city);
    I.selectOption(this.addressForm.country, country);
    I.selectOption(this.addressForm.province, province);
    I.fillField(this.addressForm.zip, zip);
    I.click(locate("button").withText("Add Address"));
  }
};
