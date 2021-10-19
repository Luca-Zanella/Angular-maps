import { Component, Input } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  gg:any;
  center: any;
  center_casa: any;
  center_campo: any;
  position: any;
  position_casa: any;
  position_campo: any;
  label: string;
  scelta_colore: string = 'red';
  arr = ['yellow', 'green', 'blue'];
  arr_rettangolo = ['#CFD11A', '#CA054D', '#00AFB5'];
  i = 0;
  circleOptions: google.maps.CircleOptions;
  circleOptions_rettangolo: { fillColor: string };
  markerOptions: google.maps.MarkerOptions;
  markerOptions_dog: google.maps.MarkerOptions;
  markerOptions_campo: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];
  rettangolo: google.maps.LatLngLiteral[];
  //circleOptions_casa: { fillColor: string };

  constructor() {
    this.circleOptions = {
      fillColor: this.scelta_colore,
      draggable: true,
      editable: true,
      
     
      
    };


    
    //this.circleOptions_casa = { fillColor: 'yellow' };
    this.center = { lat: 45.506738, lng: 9.190766 };
    this.center_casa = { lat: 45.49855918846185, lng: 9.174326997465279 };
    this.center_campo = { lat: 45.51200728254703, lng: 9.170799684170346 };
    this.position = this.center;
    this.position_casa = this.center_casa;
    this.position_campo = this.center_campo;

    this.vertices = [
      { lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      { lat: this.center.lat, lng: this.center.lng },
      { lat: this.center.lat - 0.001, lng: this.center.lng - 0.002 },
    ];
    this.rettangolo = [
      //{ lat: this.center.lat - 0, lng: this.center.lng + 0 },
      { lat: this.center.lat + 0.001, lng: this.center.lng + 0.001 },
      { lat: this.center.lat - 0.001, lng: this.center.lng + 0.001 },
      { lat: this.center.lat - 0.001, lng: this.center.lng + 0.002 },
      { lat: this.center.lat + 0.001, lng: this.center.lng + 0.002 },

      //{ lat: this.center.lat + 0.001, lng: this.center.lng + 0.002 },
    ];

    this.label = 'ciao';

    let iconData: google.maps.Icon = {
      url: './assets/img/cat_acrobat.ico',
      scaledSize: new google.maps.Size(60, 60),
    };
    let iconDog: google.maps.Icon = {
      url: './assets/img/dog.ico',
      scaledSize: new google.maps.Size(60, 60),
    };
    let iconCampo: google.maps.Icon = {
      url: './assets/img/tartaruga.ico',
      scaledSize: new google.maps.Size(60, 60),
    };

    this.markerOptions = { icon: iconData };
    this.markerOptions_dog = { icon: iconDog };
    this.markerOptions_campo = { icon: iconCampo };
  }
  /*
  colore_giallo() {
    this.circleOptions = { fillColor: 'yellow' };
  }
  */
  
 

  cambio_colore() {
    this.circleOptions = { fillColor: this.arr[this.i] };
    if (this.i < this.arr.length) {
      this.i++;
    } else {
      this.i = 0;
    }
  }
  cambio_colore_rettangolo() {
    this.circleOptions_rettangolo = { fillColor: this.arr_rettangolo[this.i] };
    if (this.i < this.arr_rettangolo.length) {
      this.i++;
    } else {
      this.i = 0;
    }
  }
}