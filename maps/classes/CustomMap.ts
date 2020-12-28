import Company from "./Company";
import User from "./User";

interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapElement: string) {
    this.googleMap = new google.maps.Map(document.querySelector(mapElement), 
    {
      zoom: 1, 
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    })
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      }
    })
  }

  // the above two methods can be reduced to addMarker
  // TS helps make reuseable code safe
  // on the below parameter, you can only use mappable.location, 
  // other properties on company or user will result in a TS error 
  addMarker(mappable: Company | User): void {
    // refactor the above pipe to use an interface.
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    })
  }

  // parameter must have a location property 
  // location must have lat and lng property
  // lat and lng must be a number 
  addMarkerRefactored(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    })
  }
  
}