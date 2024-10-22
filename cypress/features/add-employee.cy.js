import { login } from '../support/pages/login';
import { sideMenu } from '../support/sections/SideMenu';
import { pimPage } from '../support/pages/PIM';


describe('When admin adds new employee', () => {
    it('should see a success message', () => {
        login.perform_login('Admin','admin123')
        sideMenu.goToPimPage
        pimPage.add_employee()
        pimPage.success_message()
    });    
});
describe('when user search for newly added employee', () => {
    it('should see newly added employee in search', () => {
        login.perform_login('Admin','admin123')
        sideMenu.goToPimPage
        pimPage.add_employee()
        pimPage.employeeListTab.click();
        pimPage.search_employee()
        pimPage.validateEmployeeData
    });
});

