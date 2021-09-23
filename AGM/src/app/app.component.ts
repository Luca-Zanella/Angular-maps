import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center: any;
  center_casa: any;
  position: any;
  position_casa: any;
  label: string;
  scelta_colore: string = 'red';
  arr = ["yellow","green","blue"]
  i = 0;
  circleOptions: { fillColor: string };
  //circleOptions_casa: { fillColor: string };

  constructor() {
    this.circleOptions = { fillColor: this.scelta_colore };
    //this.circleOptions_casa = { fillColor: 'yellow' };
    this.center = { lat: 45.506738, lng: 9.190766 };
    this.center_casa = { lat: 45.49855918846185, lng: 9.174326997465279 };
    this.position = this.center;
    this.position_casa = this.center_casa;
    this.label = 'ciao';
  }
/*
  colore_giallo() {
    this.circleOptions = { fillColor: 'yellow' };
  }
  */
  cambio_colore() {
      this.circleOptions = { fillColor: this.arr[this.i] };
      if(this.i < this.arr.length){
        this.i++
      }else{
        this.i = 0
      }
      
    
    
  }
}