import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement;
  map: any;
  allMarker: google.maps.Marker[] = [];
  constructor() { }
  ngOnInit() {
    this.initMap();
  }

  initMap() {

    const coords = new google.maps.LatLng(35.715298, 51.404343);
    const mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    // const marker: google.maps.Marker = new google.maps.Marker({
    //   map: this.map,
    //   position: coords
    // });
    google.maps.event.addListener(this.map, 'click', (evt) => {
      console.log("coc", evt.latLng.lat());
      // marker.setPosition(evt.latLng);
      const marker: google.maps.Marker = new google.maps.Marker({
        map: this.map,
        position: coords
      });
      marker.setPosition(evt.latLng);
      this.allMarker.push(marker);
      google.maps.event.addListener(marker, 'click', (evt) => { marker.setMap(null); });

    });
  }
  getAllSelectedPlaces() {
    const res = [];
    this.allMarker.forEach(element => {
      if (element.getMap() !== null) {
        res.push({ lat: element.getPosition().lat(), lng: element.getPosition().lng() });
      }
    });
    console.log("all selected", res);
    return res;
  }
}
