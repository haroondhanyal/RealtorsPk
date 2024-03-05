/// <reference types="Cypress"/>

import {
    HomePage_without_Login
} from "../../Pages/Without_User_Login/Home_Page";
import HomePageElementsLocators from "../../Locators/HomePage/Main_Home_Page.json";



// const HomePage_Elements=new HomePage


// ... (imports and setup)


const Main_Page = new HomePage_without_Login

describe('Visit RealtorsPK Website', () => {
    it('Should visit RealtorsPK website', () => {

        Cypress.on('uncaught:exception', () => {

            return false;
        });

        try {
            // cy.viewport(1440, 820);     // I am using Customized Commands
            cy.visit('https://dev.realtorspk.com');
            cy.wait(5000);

            cy.fixture('HomePage_Search').then((data) => {
                Main_Page.city_selected(data.city_2);
                cy.wait(4000);

                Main_Page.budget_selection(data.min_price, data.max_price)
                cy.wait(9000);
                const propertyTypeXPathsToCheck = [

                    HomePageElementsLocators.Main_Home_Page_Locators.house_villa,
                    HomePageElementsLocators.Main_Home_Page_Locators.appartment,
                    HomePageElementsLocators.Main_Home_Page_Locators.pent_house,
                    HomePageElementsLocators.Main_Home_Page_Locators.farm_house,
                    HomePageElementsLocators.Main_Home_Page_Locators.basement,
                    HomePageElementsLocators.Main_Home_Page_Locators.plot,
                    HomePageElementsLocators.Main_Home_Page_Locators.upper_portion,
                    HomePageElementsLocators.Main_Home_Page_Locators.ground_floor,

                    // Add other XPaths as needed
                ];
                Main_Page.property_types(propertyTypeXPathsToCheck);
                cy.wait(3000);

                Main_Page.search_button();
                cy.wait(4000);

            })


            cy.wait(2000);
        } catch (error) {

            console.error('Error occurred will be:', error.message);
            cy.log('Error occurred will be: ' + error.message);
        }
    });
});