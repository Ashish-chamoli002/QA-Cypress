export class PIMPage extends BasePage {
    protected path = '/pim/viewEmployeeList';
    
    private selectors = {
      // Move all selectors here
    };
  
    async addEmployee(employee: Employee): Promise<void> {
      try {
        await this.clickAddButton();
        await this.fillEmployeeForm(employee);
        await this.submitForm();
        await this.validateSuccessMessage();
      } catch (error) {
        cy.log('Failed to add employee:', error);
        throw error;
      }
    }
  
    private async fillEmployeeForm(employee: Employee): Promise<void> {
      // Implementation
    }
  }