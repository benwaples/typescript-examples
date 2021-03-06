import faker from 'faker';
import { Mappable } from './CustomMap';

export default class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  // this location is not initialized here, see below
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'blue'

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    // this is where we need to initialize location with the object containing lng and lat
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `
  }
}