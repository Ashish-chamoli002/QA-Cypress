
This project is a QA automation framework developed using Cypress to test the functionalities of the OrangeHRM demo site. The framework implements the Page Object Model (POM) design pattern to enhance test maintainability and readability. Key functionalities tested include user login, adding new employees, and searching for employee records.

Prerequisites
Before running the tests, ensure you have the following installed:

Node.js: Version 14 or later || I used node 20
Cypress: This project uses Cypress for testing, which will be installed as a project dependency

How to run this Cypress test
1. Clone the repository
``
git clone [<repository-url>](https://github.com/Ashish-chamoli002/QA-Cypress.git)
cd <repository-directory>
``
2. Install dependencies
Run the following command to install the required packages:
``
npm install
``
3. Open Cypress
To open the Cypress test runner, use the following command:
``
npm run cypress:open
``
4. Run tests headlessly
To run tests in the background (headless mode), use:
``
npm run cypress:run
``

Why these scenarios were chosen?
The chosen scenarios for automation focus on critical functionalities that directly impact the user experience:

User Login: Ensuring that valid credentials allow access to the dashboard while invalid credentials show appropriate error messages is crucial for security and user validation.

Adding New Employees: This scenario tests the core functionality of the PIM (Personal Information Management) module, which is essential for HR management. Validating the success message ensures that the employee addition process works correctly.

Searching for Employees: After adding an employee, verifying that the employee appears in the search results ensures that the system correctly reflects the changes made, which is vital for operational efficiency.

By automating these scenarios, we ensure that the key functionalities remain intact as the application evolves, thus enhancing the overall reliability and quality of the OrangeHRM application.