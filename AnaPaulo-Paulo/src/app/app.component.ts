import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'AnaPaula-Flavio';
  texto : string = '';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

}
