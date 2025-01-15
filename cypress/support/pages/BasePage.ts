class BasePage {
    
    
    
    
  
    protected waitForPageLoad(): void {
      // Add page load verification
      cy.intercept('GET', '**/*').as('pageLoad');
      cy.wait('@pageLoad');
    }
  
    validateUrl(): void {
      cy.url().should('include', "");
    }
}

export default BasePage