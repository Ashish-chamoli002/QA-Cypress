import  BasePage from './BasePage';

 
 export class LoginPage  {
    //protected path = '/auth/login';
    
    private selectors = {
      usernameInput: '[name="username"]',
      passwordInput: '[name="password"]',
      submitButton: 'button[type="submit"]',
      alert: '[role="alert"]'
    };

    visit(): void {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login``');
    }
    alert() {
      return cy.get(this.selectors.alert);
    }
  
    
    login(username :string, password :string): void {
      //this.validateUrl();
      cy.get(this.selectors.usernameInput).type(username);
      cy.get(this.selectors.passwordInput).type(password);
      cy.get(this.selectors.submitButton).click();
    }
  }

  export const page = new LoginPage();
  