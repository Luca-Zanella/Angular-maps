import { AfterViewInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { GEOJSON, GeoFeatureCollection } from './models/geojson.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center: google.maps.LatLngLiteral = { lat: 45.506738, lng: 9.190766 };
  geoJsonObject: GeoFeatureCollection;
  fillColor: string = '#FF0000'; //Colore delle zone catastali

  markerList: google.maps.MarkerOptions[];
  zoom: 8;

  constructor() {
    //Questi dati dovremmo scaricarli dal server, per ora li abbiamo copiati nel file     gojson.model.ts
    this.geoJsonObject = GEOJSON;
    console.log(this.geoJsonObject);
    this.markerGenerator() //stampo l'oggetto geoJsonObject sulla console
  }

  @ViewChild('mapRef') mapRef: GoogleMap;
  ngAfterViewInit() {
    this.mapRef.data.addGeoJson(this.geoJsonObject);
    this.mapRef.data.setStyle(this.styleFunc);
  }

  //qui sta assegnando lo stile alle zone catastali i questo caso riprendiamo il colore e mettiamo un stile a caso.
  styleFunc = (feature: any) => {
    console.log(feature.i.id);
    //semplicemente nel geojson ci sono degli id in base alla zona e noi diciamo che se la zona è 1 allora è di un colore e se 0 un alrto colore
    let newColor = '#FF0000'; //RED
    if (feature.i.id == 0) newColor = '#00FF00';
    //GREEN
    else if (feature.i.id == 1) newColor = '#0000FF';
    else  newColor = '#ffff00';
    return {
      clickable: false,
      fillColor: newColor,
      strokeWeight: 1,
    };
  };

  markerGenerator() {
    this.markerList = [
      {
        position: {
          lng: this.geoJsonObject.features[0].geometry.coordinates[0][0][0],
          lat: this.geoJsonObject.features[0].geometry.coordinates[0][0][1],
        },
        label: String(this.geoJsonObject.features[0].properties.id),
      },
      {
        position: {
          lng: this.geoJsonObject.features[1].geometry.coordinates[0][0][0],
          lat: this.geoJsonObject.features[1].geometry.coordinates[0][0][1],
        },
        //per far vedere lo 0 e 1 dentro.
        label: String(this.geoJsonObject.features[1].properties.id),
      },
      {
        position: {
          lng: this.geoJsonObject.features[2].geometry.coordinates[0][0][0],
          lat: this.geoJsonObject.features[2].geometry.coordinates[0][0][1],
        },
        //per far vedere lo 0 e 1 dentro.
        label: String(this.geoJsonObject.features[2].properties.id),
      },
    ];
  }
}
