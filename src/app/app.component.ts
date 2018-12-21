import { Component } from '@angular/core';
import { map, take} from 'rxjs/operators';
import { timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  origin = { lat: 18.850848, lng: -97.103737 }
  destination = { lat: 18.854760, lng: -97.098305}
  routes = [
    { lat: 18.851305, lng: -97.102117, time: "6 mitutes" },
    { lat: 18.851955, lng: -97.099928, time: "4 mitutes" },
    { lat: 18.852405, lng: -97.098359, time: "2 mitutes" },
    { lat: 18.853288, lng: -97.096900, time: "1 mitutes" },
    { lat: 18.854760, lng: -97.098305, time: "Successful Delivery" }
  ]

  public renderOptions = {
    suppressMarkers: true,
  }

  public markerOptions = {
    origin: {
      icon: 'https://www.shareicon.net/data/32x32/2015/09/02/94547_package_512x512.png',
      infoWindow: ``
    },
    destination: {
      icon: 'https://www.shareicon.net/data/32x32/2015/08/23/89547_person_512x512.png',
      
    },
  }

  Go() {
    timer(0, 2000).pipe(
      take(this.routes.length),
      map(i =>this.routes[i]))
    .subscribe((values) => {
      this.origin = { lat: values.lat, lng: values.lng };
      this.markerOptions = {
        origin: {
          icon: 'https://www.shareicon.net/data/32x32/2015/09/02/94547_package_512x512.png',
          infoWindow: `
          <strong>Status: </strong> 
          <p> ${values.time} </p>`
        },
        destination: {
          icon: 'https://www.shareicon.net/data/32x32/2015/08/23/89547_person_512x512.png',
        }
      }
    });
  }
}
