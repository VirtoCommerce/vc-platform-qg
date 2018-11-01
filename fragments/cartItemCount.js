const I = actor();

module.exports = {

    // insert your locators and methods here
    cartItemCount:
        {
            formItem: "//form[@name = 'formCart']",
            formSubmitButton: "//button[contains(.,'Checkout')]"
        }
}
