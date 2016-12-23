import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-weather-home',
  template: `
    <div class="row text-xs-center">
      <h1>{{title}}</h1>
      <div class="row m-t-3">
        <p>{{instruction}}</p>
        <a routerLink="/weather" class="btn btn-outline-danger">Weather Forecast</a>
        <a routerLink="/tides" class="btn btn-outline-danger">Tide & Current</a>
        <a routerLink="/" class="btn btn-outline-danger">All</a>
      </div>
    </div>
  `,
  styles: []
})
export class WeatherHomeComponent implements OnInit {
  title: String = 'Angular Weather App';
  instruction: String = 'Please select a weather service:';
  constructor() { }

  ngOnInit() {
  }

}
