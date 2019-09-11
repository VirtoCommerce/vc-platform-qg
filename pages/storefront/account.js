const I = actor();

module.exports = {

    links: {
        changePassword: '//a[@ng-link="[\'PasswordChange\']"]',
    },
    changePasswordForm: {
        oldPassword: '#oldPassword',
        newPassword: "#newPassword",
        newPasswordConfirmation: "#newPassword2",

        errorForm: '//div[@class="note form-error ng-scope"]',
        error1: '//div[@class= "note form-error ng-scope"]/ul/li[1]',
        error2: '//div[@class= "note form-error ng-scope"]/ul/li[2]',

        changePasswordButton: '//button//span[contains( text(), "Change password")]'
    }
}
