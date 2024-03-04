/// <reference types="Cypress"/>

import {
    HomePage
} from "../../Pages/Home"
import {
    UserDashboard_Login
} from "../../Pages/Dashboard/UserDashboard_Login";

const UserDash_Login = new UserDashboard_Login;
// const HomePage_Elements = new HomePage;

describe("User Wants to Login in to Dashboard with Valid Credentials", () => {
    Cypress.on('uncaught:exception', () => {

        return false;
    });

    beforeEach(() => {
        cy.viewport(1280, 820)
        cy.visit("https://dev.realtorspk.com/")
        cy.wait(3000);
        try {
            cy.fixture('UserDashboard_Login').then((data) => {
                UserDash_Login.sitePage_header();
                cy.wait(3000);

                UserDash_Login.userEmail(data.email);
                cy.wait(1000);
                UserDash_Login.userPassword(data.password);
                cy.wait(1000);
                UserDash_Login.continueButton();
                cy.wait(5000);
                UserDash_Login.User_Icon();
                cy.wait(3000);
                // UserDash_Login.Dashboard_Button();
                // cy.wait(5000);
                // UserDash_Login.AddCredit();
                // cy.wait(20000);




            })

        } catch (error) {

            console.error('Error occurred will be:', error.message);
            cy.log('Error occurred will be: ' + error.message);

        }

    });
    //// invoke method is not working so i have left that

    it("should Login Successfully and Dashboard is Visible", () => {
        // Log the value returned by UserDash_Login.Dashboard_Button()
        cy.log('Before invoking removeAttr');
        /// Actually i have just used this direct xpath because it is not working so directly i will pass Xpath 
        // and using this function

        cy.xpath("//a[normalize-space()='Dashboard']").invoke('removeAttr', 'target').click()
        // UserDash_Login.Dashboard_Button().invoke('removeAttr', 'target').click()

        cy.wait(2000);

        cy.log('After invoking removeAttr');
        cy.url().should('include', 'https://dev.agents.realtorspk.com/dashboard');

        // Interact with elements on the Dashboard page
        UserDash_Login.AddCredit();

        UserDash_Login.Cancel_Credit_Req();

        // Check the value in the browser console
    });


});