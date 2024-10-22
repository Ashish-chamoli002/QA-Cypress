import BasePage from './BasePage';
import { user } from '../factories';

//PIM Page
class PIM extends BasePage {
    constructor() {
        super();
        this.user = user(); 
    }

    get employeeListTab () {
        return cy.get('[role="navigation"]').contains('Employee List')
    }

    get employeeRows() {
        return cy.get('.oxd-table-body .oxd-table-card');
    }

    getFirstName(row) {
        return row.find('.oxd-table-cell .data').eq(0); 
    }

    getLastName(row) {
        return row.find('.oxd-table-cell .data').eq(1); 
    }

    // Get the specific row by employee name
    getEmployeeRow(firstName, lastName) {
        return this.employeeRows
            .contains('.oxd-table-card', `${firstName} ${lastName}`)
            .parent(); 
    }

    get add_button () {
        return cy.get('button.oxd-button--secondary').contains('Add');
    }

    get firstName () {
        return cy.get('[name="firstName"]');
    }

    get middleName () {
        return cy.get('[name="middleName"]');
    }

    get lastName () {
        return cy.get('[name="lastName"]');
    }

    add_employee () { 
        this.add_button.click();
        this.firstName.type(this.user.firstName);   
        this.middleName.type(this.user.middleName); 
        this.lastName.type(this.user.lastName); 
        cy.get('button[type="submit"]').contains('Save').click();
        Cypress.env('employeeData', this.user);
    }

    success_message () {
        cy.get('.oxd-text--toast-title').should('have.text', 'Success')
    }
    
    search_employee () {
        const employeeData = Cypress.env('employeeData');
        if (employeeData) {
            cy.getInputByLabel('Employee Name').type(`${employeeData.firstName} ${employeeData.lastName}`);
            cy.get('button[type="submit"]').contains('Search').click();
        } else {
            throw new Error('Employee data is not available for searching');
        }
    }

    validateEmployeeData(employeeData) {
        const { firstName, lastName, employeeID } = employeeData;
        const employeeRow = this.getEmployeeRow(firstName, lastName);
        this.getFirstName(employeeRow).should('have.text', firstName);
        this.getLastName(employeeRow).should('have.text', lastName);        
    }
}

export const pimPage= new PIM();