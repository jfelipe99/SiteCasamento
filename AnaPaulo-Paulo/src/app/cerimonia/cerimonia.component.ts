import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerimonia',
  templateUrl: './cerimonia.component.html',
  styleUrls: ['./cerimonia.component.css']
})
export class CerimoniaComponent implements OnInit {

  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.19774437639088;
  lng: number = -46.87597903877726;
  zoom: number = 15;
  
  constructor() { }

  ngOnInit(): void {
  }

}
