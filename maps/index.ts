import Company from './classes/Company';
import User from './classes/User'
import { CustomMap } from './classes/CustomMap'
// import '@types/googlemaps';

const user = new User();

// auto imports still work
const company = new Company();
const map = new CustomMap('#map')

console.log(user)
console.log(company)
console.log(map)
