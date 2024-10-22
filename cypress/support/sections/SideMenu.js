//Page for Side Menu panel
class SideMenu {
    get goToPimPage () {
        return cy.get('a.oxd-main-menu-item').contains('PIM').click();     
    }
}
export const sideMenu = new SideMenu();