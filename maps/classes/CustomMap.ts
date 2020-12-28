import Company from "./Company";
import User from "./User";

interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
  markerContent(): string;
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
  // refactoring starts on line 49
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    })

    // see next function to see how to customize this marker
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'hello world'
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
  // implicit type check above. 
  // We dont use this mappable type on the User or Company class
  // behind the scenes, TS making sure that whatever gets passed to 'addMarkerRefactored' is of Mappable type
  
  addMarkerWithInfo(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    })

    // see next function to see how to customize this marker
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'hello world'
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}