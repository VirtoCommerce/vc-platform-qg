'use strict';

module.exports = function () {
    return actor({

        sites: {
            storefront: 'demo.virtocommerce.com',
            vccom: 'vccom.com/'
        },

        credentials: {
            user: 'test_user@mail.com',
            password: 'aA111111'
        },

        loginForm: {
            selector: '#customer_login',
            signInLink: '#customer_login_link',
            user: '#customer_user_name',
            password: '#customer_password',
            loginButton: 'input[type="submit"]'
        },

        customerInfo: {
            email: 'spo@virtoway.com',
            firstName: 'E2E',
            lastName: 'customer',
            company: 'E2E Company',
            address: 'E2E Address',
            city: 'E2E City',
            postalCode: '555'
        },

        addresses: {
            address1: {
                firstName : "Ivan",
                lastName : "Petrov",
                company :  "Company_name",
                addressLine1 : "Street_name",
                addressLine2 : "3",
                city :  "Town_name",
                country :  "Canada",
                region : "Alberta",
                zip : "3232"
            },
            address2: {
                firstName : "Peter",
                country :  "Armenia",
            },
        },

        signIn: function () {
            this.waitForElement(this.loginForm.signInLink, 5);
            this.click(this.loginForm.signInLink);
            within(this.loginForm.selector, () => {
                this.fillField(this.loginForm.user, this.credentials.user);
                this.fillField(this.loginForm.password, this.credentials.password);
                this.click(this.loginForm.loginButton);
            });
        }
    });
};