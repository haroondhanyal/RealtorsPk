

// /// <reference types="Cypress"/>

// import { HomePage_without_Login } from "../../Pages/Without_User_Login/Home_Page";
// import HomePageElementsLocators from "../../Locators/HomePage/Main_Home_Page.json";
// import fs from 'fs/promises';


// const Main_Page = new HomePage_without_Login;

// describe('Visit RealtorsPK Website', () => {
//     let jsonData = []; // Array to store test data

//     it('Should visit RealtorsPK website', () => {
//         Cypress.on('uncaught:exception', () => {
//             return false;
//         });

//         try {
//             cy.viewport(1440, 820);
//             cy.visit('https://dev.realtorspk.com');
//             cy.wait(5000);

//             cy.fixture('HomePage_Search').then((data) => {
//                 Main_Page.city_selected(data.city_2);
//                 cy.wait(4000);

//                 Main_Page.budget_selection(data.min_price, data.max_price);
//                 cy.wait(4000);

//                 const propertyTypeXPathsToCheck = [
//                     HomePageElementsLocators.Main_Home_Page_Locators.house_villa,
//                     HomePageElementsLocators.Main_Home_Page_Locators.flat,
//                     HomePageElementsLocators.Main_Home_Page_Locators.pent_house,
//                     HomePageElementsLocators.Main_Home_Page_Locators.farm_house,
//                     HomePageElementsLocators.Main_Home_Page_Locators.basement,
//                     HomePageElementsLocators.Main_Home_Page_Locators.upper_portion,
//                     HomePageElementsLocators.Main_Home_Page_Locators.room,
//                 ];

//                 Main_Page.property_types(propertyTypeXPathsToCheck);
//                 cy.wait(3000);

//                 Main_Page.search_button();
//                 cy.wait(4000);

//                 // Collect relevant test data
//                 const testData = {
//                     city: data.city_2,
//                     minPrice: data.min_price,
//                     maxPrice: data.max_price,
//                     // Add other data as needed
//                 };

//                 // Push the test data to the array
//                 jsonData.push(testData);
//                 console.log('Collected Test Data:', testData);
//             });

//             cy.wait(2000);
//         } catch (error) {
//             console.error('Error occurred: ', error.message);
//             cy.log('Error occurred: ' + error.message);
//         }
//     });
//     after(async () => {
//         try {
//             // Save collected test data to a JSON file
//             const jsonFilePath = 'cypress/reports/testData.json';
//             await fs.writeFile(jsonFilePath, JSON.stringify(jsonData));
//             console.log(`Test data saved to ${jsonFilePath}`);
//         } catch (error) {
//             console.error('Error saving test data:', error.message);
//         }
//     });

  
// });

///// simple code it 

/// <reference types="Cypress"/>

import { HomePage_without_Login } from "../../Pages/Without_User_Login/Home_Page";
import HomePageElementsLocators from "../../Locators/HomePage/Main_Home_Page.json";


const Main_Page = new HomePage_without_Login;

describe('Visit RealtorsPK Website', () => {
    let jsonData = []; // Array to store test data

    it('Should visit RealtorsPK website', () => {
        Cypress.on('uncaught:exception', () => {
            return false;
        });

        try {
            cy.viewport(1440, 820);
            cy.visit('https://dev.realtorspk.com');
            cy.wait(5000);

            cy.fixture('HomePage_Search').then((data) => {
                Main_Page.city_selected(data.city_2);
                cy.wait(4000);

                Main_Page.budget_selection(data.min_price, data.max_price);
                cy.wait(4000);

                const propertyTypeXPathsToCheck = [
                    HomePageElementsLocators.Main_Home_Page_Locators.house_villa,
                    HomePageElementsLocators.Main_Home_Page_Locators.flat,
                    HomePageElementsLocators.Main_Home_Page_Locators.pent_house,
                    HomePageElementsLocators.Main_Home_Page_Locators.farm_house,
                    HomePageElementsLocators.Main_Home_Page_Locators.basement,
                    HomePageElementsLocators.Main_Home_Page_Locators.upper_portion,
                    HomePageElementsLocators.Main_Home_Page_Locators.room,
                ];

                Main_Page.property_types(propertyTypeXPathsToCheck);
                cy.wait(3000);

                Main_Page.search_button();
                cy.wait(4000);

                // Collect relevant test data
                const testData = {
                    city: data.city_2,
                    minPrice: data.min_price,
                    maxPrice: data.max_price,
                    // Add other data as needed
                };

                
            });

            cy.wait(2000);
        } catch (error) {
            console.error('Error occurred: ', error.message);
            cy.log('Error occurred: ' + error.message);
        }
    });
    

  
});

