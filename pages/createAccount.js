
const I = actor();

module.exports = {

  // insert your locators and methods here
    accountForm:
        {
            firstName:"#first_name",
            lastName:"#last_name",
            email:"#email",
            userName:"#user_name",
            password:"#create_password",
            submitButton:"//input[@type='submit'][contains(@value, 'Create')]"
        },

    sendNewUserForm(firstName, lastName, email, userName, password) {
        I.fillField(this.accountForm.firstName, firstName);
        I.fillField(this.accountForm.lastName, lastName);
        I.fillField(this.accountForm.email, email);
        I.fillField(this.accountForm.userName, userName);
        I.fillField(this.accountForm.password, password);
        I.click(this.accountForm.submitButton);
    }
}
