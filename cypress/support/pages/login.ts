import BasePage from './BasePage';

interface LoginCredentials {
  username: string;
  password: string;
}
 
 export class LoginPage extends BasePage {
        
    path: string = '/auth/login';
    private selectors = {
      usernameInput: '[name="username"]',
      passwordInput: '[name="password"]',
      submitButton: 'button[type="submit"]',
      alert: '[role="alert"]'
    };
    
    
    alert() {
      return cy.get(this.selectors.alert);
    }
  
    
    // login(username :string, password :string): void {
    //   this.validateUrl(this.path);
    //   cy.get(this.selectors.usernameInput).type(username);
    //   cy.get(this.selectors.passwordInput).type(password);
    //   cy.get(this.selectors.submitButton).click();
    // }
    async login({username, password}: LoginCredentials): Promise<void> {
      this.validateUrl(this.path);
      cy.get(this.selectors.usernameInput).type(username);
      cy.get(this.selectors.passwordInput).type(password);
      cy.get(this.selectors.submitButton).click();
    }
  }

  export const loginPage = new LoginPage();