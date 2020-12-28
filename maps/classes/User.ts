import faker from 'faker'

// TS convention is to not use default so that you always include curly braces
export default class User {
  name: string;
  // location object is not initialized, only typed here. see below for initialization.
  location: {
    lat: number;
    lng: number;
  }

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