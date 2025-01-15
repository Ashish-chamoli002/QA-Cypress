describe('Employee Management', () => {
    let testEmployee: Employee;
  
    beforeEach(() => {
      cy.clearCookies();
      testEmployee = createEmployee();
      cy.login('Admin', 'admin123');
    });
  
    it('should add new employee successfully', () => {
      cy.intercept('POST', '**/api/v2/pim/employees').as('addEmployee');
      
      pimPage
        .addEmployee(testEmployee)
        .then(() => {
          cy.wait('@addEmployee')
            .its('response.statusCode')
            .should('eq', 201);
        });
    });
  });