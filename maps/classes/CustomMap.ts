export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.querySelector('#map'), 
    {
      zoom: 1, 
      center: {
        lat: 0,
        lng: 0
      }
    })
  }


  
}