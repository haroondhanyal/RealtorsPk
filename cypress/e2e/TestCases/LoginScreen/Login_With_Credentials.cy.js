/// <reference types="Cypress"/>

import {
    HomePage
} from "../../Pages/Home";
import {
    loginPage
} from "../../Pages/LoginPage";


const Login_Credentials = new loginPage
const HomePage_Elements = new HomePage

describe('Login and Home Page Tests', function () {

    beforeEach(() => {
        // Common setup steps before each test
        // cy.viewport(1440, 820) /// Used Customized here

        cy.visit("https://dev.realtorspk.com/commercial/auth/login");
        cy.wait(4000);

        //my app all the login or nay values will be store in fixture folders  xpath etc placed in locators 
        // pages contains all test cases and we have  

        cy.fixture('LoginData').then((data) => {
            Login_Credentials.email(data.email);
            Login_Credentials.password(data.password);
            Login_Credentials.LoginButton();
            cy.wait(4000);

        })


    });

    // it('Should login successfully', function () {
    //     // Any specific checks/assertions related to the login can go here
    // });



    describe('Home Page Tests', function () {
        it('Should redirect to the Home Page', function () {
            HomePage_Elements.home_header();
            // Add any additional checks/assertions related to the Home Page here
        });


        // Add more home page-related tests if needed
    });


    // Add more it blocks for additional test scenarios if needed

});