export const apiHelpers = {
    createEmployeeViaApi(employee: Employee): Cypress.Chainable<Response> {
      return cy.request({
        method: 'POST',
        url: '/api/v2/pim/employees',
        body: employee,
        failOnStatusCode: false
      });
    }
  };