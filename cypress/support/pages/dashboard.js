//Dashboard page
class Dashboard {

    validateDashboardLoaded() {
      cy.get('.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget')
      .should('have.length.greaterThan', 0);
    }
  }
  export const dashboard = new Dashboard();