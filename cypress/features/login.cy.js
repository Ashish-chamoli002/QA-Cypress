
import { login } from '../support/pages/login';
import { dashboard } from '../support/pages/dashboard';

describe('When user logins with invalid credentials', () => {  
  it('Should get error message', () => {
    login.visit();
    login.username('Admin');
    login.password('invalidPassword');
    login.submit();
    login.alert().should('be.visible');   
    login.alert().should('contain.text', 'Invalid credentials');
  });
});

describe('When user logins with valid credentials', () => {
  it('Should login successfully', () => {
    login.visit();
    login.username('Admin');
    login.password('admin123');
    login.submit();
    dashboard.validateDashboardLoaded();
  });
});
