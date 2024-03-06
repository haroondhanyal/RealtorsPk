/// <reference types="Cypress"/>

import {
    UserDashboard_Logout
} from '../../Pages/Dashboard/UserDashboard_Logout'


const UserDash_LogOut = new UserDashboard_Logout;

describe("User Wants to Login Out  from the Website", () => {
    Cypress.on('uncaught:exception', () => {

        return false;
    });

    beforeEach(() => {

        cy.visit("https://dev.realtorspk.com/")
        cy.wait(3000);
        try {
            cy.fixture('UserDashboard_Login').then((data) => {
                UserDash_LogOut.sitePage_header();

                UserDash_LogOut.userEmail(data.email);

                UserDash_LogOut.userPassword(data.password);

                UserDash_LogOut.continueButton();

                UserDash_LogOut.User_Icon();


            })

        } catch (error) {

            console.error('Error occurred will be:', error.message);
            cy.log('Error occurred will be: ' + error.message);

        }

    });
    //// invoke method is not working so i have left that

    it("Should  Apply Logout , As user wants to Exists from website", () => {
        // Log the value returned by UserDash_Login.Dashboard_Button()
        UserDash_LogOut.LogOut_Button();


        cy.wait(2000);

    });


});