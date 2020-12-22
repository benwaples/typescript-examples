import faker from 'faker';

export default class Company {
  companyName: string;
  catchPhrase: string;
  // this location is not initialized here, see below
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    // this is where we need to initialize location with the object containing lng and lat
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude())
    }
  }
}