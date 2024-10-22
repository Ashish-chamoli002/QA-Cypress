
const { faker } = require('@faker-js/faker');

export const user = () => {
  return {
    firstName: faker.name.firstName(),     
    middleName: faker.name.middleName(),   
    lastName: faker.name.lastName(),       
    email: faker.internet.email(),         
    address: faker.address.streetAddress(),
    city: faker.address.city(),            
    state: faker.address.state(),          
    zipCode: faker.address.zipCode(),      
    phone: faker.phone.number(),           
  };
};
