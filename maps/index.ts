import Company from './classes/Company';
import User from './classes/User'
import { CustomMap } from './classes/CustomMap'

const user = new User();

// auto imports still work
const company = new Company();
const map = new CustomMap('#map')

map.addMarker(user)
map.addMarker(company)
