import Company from './classes/Company';
import User from './classes/User'
import '@types/googlemaps';

const user = new User();
const map = new google.maps.Map(document.querySelector('#map'), 
{
  zoom: 1, 
  center: {
    lat: 0,
    lng: 0
  }
})

// auto imports still work
const company = new Company();

console.log(user)
console.log(company)
