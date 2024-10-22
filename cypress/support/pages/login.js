import BasePage from './BasePage';
class LoginPage extends BasePage {

    alert() {
        return cy.get('[role="alert"]'); 
    }
    visit() {
      cy.visit('/');
    }
    username(username) {
      cy.get('[name="username"]').type(username);
    }
    password(password) {
      cy.get('[name="password"]').type(password);
    }
    submit() {
      cy.get('button[type="submit"]').click();
    }
    error_message() {
      cy.get('[role="alert"]')
    }

    perform_login(username,password) {
        this.visit()
        this.username(username)
        this.password(password)
        this.submit()
    }
  }
  export const login = new LoginPage();
  
  