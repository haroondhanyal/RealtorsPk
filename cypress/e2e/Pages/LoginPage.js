const LoginPageElementsLocators = require ('../Locators/LoginPageLocators.json')

export class loginPage{

    email(emails) {
        cy.xpath(LoginPageElementsLocators.LoginPageLocators.email_text).type(emails);
        return
    }
    password(passwords) {
        cy.xpath(LoginPageElementsLocators.LoginPageLocators.password_text).type(passwords);
        return
    }
    // CheckBox() {
    //     cy.get(LoginPageElementsLocators.LoginPageLocators.CheckBox_text).check();
    //     return
    // }
    LoginButton() {
        cy.xpath(LoginPageElementsLocators.LoginPageLocators.LoginButton_text).click();
        cy.wait(4000);
        return
    }
}