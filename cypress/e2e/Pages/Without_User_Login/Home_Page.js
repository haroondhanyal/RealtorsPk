const HomePageElementsLocators = require ('../../Locators/HomePage/Main_Home_Page.json')

export class HomePage_without_Login {

    city_selected(city){
        cy.xpath(HomePageElementsLocators.Main_Home_Page_Locators.city_dropdown).type(city);
        // cy.wait(4000);         
    }

    budget_selection(priceMin,priceMax) {
      cy.xpath(HomePageElementsLocators.Main_Home_Page_Locators.budget_dropdown).click();
      cy.wait(5000)
      cy.xpath(HomePageElementsLocators.Main_Home_Page_Locators.min_price).should('be.visible').type(priceMin);
      cy.wait(2000)
      cy.xpath(HomePageElementsLocators.Main_Home_Page_Locators.max_price).should('be.visible').type(priceMax);
      cy.wait(2000)

      cy.xpath(HomePageElementsLocators.Main_Home_Page_Locators.budget_done_button).should('be.visible').click({ force: true });

      
         
    }


    property_types(propertyTypeXPaths) {
      const dropdownLocator = HomePageElementsLocators.Main_Home_Page_Locators.property_type_dropdown;
  
      // Open the dropdown
      cy.xpath(dropdownLocator).should('be.visible').click();
  
      // Click on each property type using its specific XPath
      propertyTypeXPaths.forEach((propertyType) => {
          cy.xpath(propertyType).should('exist').should('be.visible').click({ force: true }); // Using { force: true } to click even if covered
          
      });
          
  }
    search_button(){
        cy.xpath(HomePageElementsLocators.Main_Home_Page_Locators.search_button).click();
        
        
    }
}