declare namespace Cypress {
    interface Chainable {
      getInputByLabel(label: string): Chainable;
      login(username: string, password: string): void;
      validateToast(message: string): void;
    }
  }
  
  // Add more reusable commands
  Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
      cy.visit('/');
      cy.get('[name="username"]').type(username);
      cy.get('[name="password"]').type(password);
      cy.get('button[type="submit"]').click();
    });
  });