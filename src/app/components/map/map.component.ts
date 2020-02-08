import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement;
  map: any;
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
      console.log("coc", evt);
      // marker.setPosition(evt.latLng);
      const marker: google.maps.Marker = new google.maps.Marker({
        map: this.map,
        position: coords
      });
      marker.setPosition(evt.latLng);
    });
  }


}
