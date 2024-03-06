const User_Dashboard_LogOut_Locators = require("../../Locators/UserDashboard/UserDashboard_Logout_Locators.json");

export class UserDashboard_Logout {
    sitePage_header() {
        cy.xpath(User_Dashboard_LogOut_Locators.UserDashboard_LogOutLocators.SigninButton).click();
    }

    userEmail(email) {
        cy.xpath(User_Dashboard_LogOut_Locators.UserDashboard_LogOutLocators.User_Email).type(email);
        cy.wait(2000)
    }


    userPassword(password) {
        cy.xpath(User_Dashboard_LogOut_Locators.UserDashboard_LogOutLocators.User_Password).type(password);
        cy.wait(2000)
    }

    continueButton() {
        cy.xpath(User_Dashboard_LogOut_Locators.UserDashboard_LogOutLocators.Continue_Button).click();
        cy.wait(6000); // Consider removing this wait or replacing it with a Cypress command that waits for an element to appear
    }

    User_Icon() {
        // i have created Custom xpath for this.
        cy.xpath(User_Dashboard_LogOut_Locators.UserDashboard_LogOutLocators.User_Icon).click();
        cy.wait(6000);
    }

    LogOut_Button() {
        cy.xpath(User_Dashboard_LogOut_Locators.UserDashboard_LogOutLocators.User_LogOut).click();
        cy.wait(6000); // Consider removing this wait or replacing it with a Cypress command that waits for an element to appear
    }

}