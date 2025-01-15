interface Employee {
    firstName: string;
    middleName: string;
    lastName: string;
    // Add more properties
    employeeId?: string;
    status: 'Active' | 'Inactive';
    jobTitle?: string;
  }
  
  export const createEmployee = (overrides?: Partial<Employee>): Employee => ({
    firstName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    lastName: faker.name.lastName(),
    status: 'Active',
    ...overrides
  });