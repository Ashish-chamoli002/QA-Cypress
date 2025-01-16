export default class BasePage {
  
  
  visit(): void {
      cy.visit(`${Cypress.config('baseUrl')}`);
    }

    waitForPageLoad(): void {
      // Add page load verification
      cy.intercept('GET', '**/*').as('pageLoad');
      cy.wait('@pageLoad');
    }
  
    validateUrl(path: string): void {
      cy.url().should('include', path);
    }
}

//export default BasePage