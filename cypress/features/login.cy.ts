
import { dashboardPage } from '../support/pages/dashboard';
import { loginPage } from '../support/pages/login';


describe('User Authentication with invalid credentials', () => {
  before(() => {
      loginPage.visit();
      loginPage.waitForPageLoad();
  });
  after(() => {
      cy.clearLocalStorage();
  });

  it('should show error message ', () => {
      loginPage.login({
          username: 'testUser',
          password: 'securePassword123'
      });
      
      loginPage.alert()
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
  });
});

describe('User Authenticationwith valid credentials', () => {
    before(() => {
        loginPage.visit();
    });


    it('should login successfully ', () => {
        loginPage.login({
            username: 'Admin',
            password: 'admin123'
        });
        
        dashboardPage.validateDashboardLoaded();
    });
});