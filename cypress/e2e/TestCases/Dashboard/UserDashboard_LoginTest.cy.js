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
        cy.viewport(1280, 720)
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
        UserDash_Login.Dashboard_Button().should('be.visible').invoke('removeAttr', 'target');
        cy.wait(2000);
        cy.log('After invoking removeAttr');
        cy.url().should('include', 'https://dev.agents.realtorspk.com/dashboard');

        // Interact with elements on the Dashboard page
        UserDash_Login.AddCredit();
        cy.wait(20000);
        // Check the value in the browser console
    });

    // Wait for a short time to ensure the Dashboard button is loaded
    // Adjust the wait time as needed

    // Click the Dashboard button
    // UserDash_Login.Dashboard_Button().then(($dashboardButton) => {
    //     if ($dashboardButton) {
    //         $dashboardButton.click();
    //     } else {
    //         // Handle the case if the Dashboard button is not found
    //         cy.log('Dashboard button not found');
    //         // You can add additional error handling or fail the test here
    //         expect($dashboardButton).to.exist; // Fails the test if the Dashboard button is not found
    //     }
    // });

    // Wait for the dashboard page to load and ensure the correct URL
    // Adjust the wait time as needed
});