
import { page } from '@pages/login';
//import { dashboard } from '../support/pages/dashboard';

describe('When user logins with invalid credentials', () => {  
   
  it('Should get error message', () => {
    console.log('LoginPage instance:', page);
    page.visit();    
    //page.validateUrl();
    page.login('testUser', 'securePassword123');
    // page.login({
    //   username: 'testUser',
    //   password: 'securePassword123'
    // });
    page.alert()
    .should('be.visible')
    .and('contain.text', 'Invalid credentials');
  });
});

// describe('When user logins with valid credentials', () => {
//   it('Should login successfully', () => {
//     login.visit();
//     login.username('Admin');
//     login.password('admin123');
//     login.submit();
//     dashboard.validateDashboardLoaded();
//   });
// });
