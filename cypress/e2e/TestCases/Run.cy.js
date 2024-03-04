/// <reference types="Cypress"/>

describe("Checking the New tab", () => {
    it("New tab for the Google", () => {
        cy.origin('https://about.google', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('Permission denied to access property "document" on cross-origin object')) {
                    // Ignore the cross-origin error and allow the test to continue
                    return false;
                }
            });

            // Visit the cross-origin page
            cy.visit('https://about.google/products/');
        });

        cy.visit("https://www.google.com/gmail/about/");
        cy.wait(3000);
        cy.get('.footer__links > :nth-child(2) > :nth-child(4) > .link').invoke('removeAttr', 'target').click();
        cy.wait(2000);
    });
});