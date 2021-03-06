import faker from 'faker'
import { Mappable } from './CustomMap';

// TS convention is to not use default so that you always include curly braces
export default class User implements Mappable {
  name: string;
  // location object is not initialized, only typed here. see below for initialization.
  location: {
    lat: number;
    lng: number;
  }
  // TS is making sure that this class will be Mappable 
  color: string = 'red';

   constructor() {
     this.name = faker.name.firstName()
     // this is where we need to initialize location with the object containing lng and lat
     this.location = { 
       lat: Number(faker.address.latitude()), 
       lng: Number(faker.address.longitude())
      }
   }

   markerContent(): string {
    return `User Name: ${this.name}`
   }
}