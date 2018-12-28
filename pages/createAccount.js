const I = actor();

module.exports = {
    accountForm: {
        firstName: "#first_name",
        lastName: "#last_name",
        email: "#email",
        userName: "#user_name",
        password: "#create_password",
        submitButton: "//input[@type='submit'][contains(@value, 'Create')]"
    },
    newUser: {
        firstName: 'Alex',
        lastName: "Zol",
        email: 'alex.zol@gmail.com',
        login: 'Alex.Zol',
        password: 'Az1234567'
    },
    URLs: {
        account: {
            register: '/account/register'
        }
    },

    sendNewUserForm() {
        I.fillField(this.accountForm.firstName, this.newUser.firstName);
        I.fillField(this.accountForm.lastName, this.newUser.lastName);
        I.fillField(this.accountForm.email, this.newUser.email);
        I.fillField(this.accountForm.userName, this.newUser.login);
        I.fillField(this.accountForm.password, this.newUser.password);
        I.click(this.accountForm.submitButton);
    }
};