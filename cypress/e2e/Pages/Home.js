const HomePageElements=require('../Locators/HomepageLocators.json')

export class HomePage{
    home_header(){
        cy.xpath(HomePageElements.HomePageLocators.home_header_text).click();
        cy.wait(12000);
        

        // cy.get('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > p:nth-child(2) > span:nth-child(2').should('be.visible');
    }
}