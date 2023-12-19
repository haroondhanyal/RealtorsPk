/// <reference types="Cypress"/>

// import { HomePage } from "../../Pages/Home";

// const HomePage_Elements=new HomePage

// ... (imports and setup)

describe('Visit RealtorsPK Website', () => {
    it('Should visit RealtorsPK website', () => {
       
        Cypress.on('uncaught:exception', () => {
           
            return false;
        });

        try {
            cy.viewport(1440, 820);
            cy.visit('https://realtorspk.com');
            cy.wait(5000);

         
            cy.get('.flex-wrap > :nth-child(1) > [href="https://realtorspk.com/residential/"]').click();
            
            cy.wait(2000);
        } catch (error) {
         
            console.error('Error occurred will be:', error.message); 
            cy.log('Error occurred will be: ' + error.message); 
        }
    });
});
