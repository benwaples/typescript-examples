import Company from './classes/Company';
import User from './classes/User'

const user = new User();

// auto imports still work
const company = new Company();

console.log(user)
console.log(company)