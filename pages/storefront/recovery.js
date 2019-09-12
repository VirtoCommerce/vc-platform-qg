const I = actor();

module.exports = {
    forgotLoginLink: '//a[contains(@href, "forgotlogin")]',
    forgotPasswordLink: '//a[contains(@href, "forgotpassword")]',
    email: '#recover-email',
    submit: '//input[@type="submit"][@value="Submit"]',
    errorMessage: '//div[contains(@class, "form-error")]',
    successMessage : '//div[@id="resetSuccess"]'
};