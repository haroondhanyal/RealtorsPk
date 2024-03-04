const User_Dashboard_Login_Locators = require("../../Locators/UserDashboard/UserDashboard_Login_Locators.json");

export class UserDashboard_Login {
    sitePage_header() {
        cy.xpath(User_Dashboard_Login_Locators.UserDashboard_LoginLocators.SigninButton).click();
    }

    userEmail(email) {
        cy.xpath(User_Dashboard_Login_Locators.UserDashboard_LoginLocators.User_Email).type(email);
    }


    userPassword(password) {
        cy.xpath(User_Dashboard_Login_Locators.UserDashboard_LoginLocators.User_Password).type(password);
    }

    continueButton() {
        cy.xpath(User_Dashboard_Login_Locators.UserDashboard_LoginLocators.Continue_Button).click();
        cy.wait(2000); // Consider removing this wait or replacing it with a Cypress command that waits for an element to appear
    }

    User_Icon() {
        // i have created Custom xpath for this.
        cy.xpath(User_Dashboard_Login_Locators.UserDashboard_LoginLocators.User_Icon).click();
    }

    Dashboard_Button() {
        cy.xpath(User_Dashboard_Login_Locators.UserDashboard_LoginLocators.Dashboard_Button).click();
        cy.wait(2000); // Consider removing this wait or replacing it with a Cypress command that waits for an element to appear
    }
    AddCredit() {
        cy.xpath(User_Dashboard_Login_Locators.UserDashboard_LoginLocators.Add_Credit).click();
        cy.wait(2000); // Consider removing this wait or replacing it with a Cypress command that waits for an element to appear
    }
    Cancel_Credit_Req() {
        cy.xpath(User_Dashboard_Login_Locators.UserDashboard_LoginLocators.Credit_Req_Cancel).click();
        cy.wait(2000); // Consider removing this wait or replacing it with a Cypress command that waits for an element to appear
    }
}