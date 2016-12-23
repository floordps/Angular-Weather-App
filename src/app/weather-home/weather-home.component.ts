import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'weather-weather-home',
  template: `
    <div class="text-xs-center">
      <h1>{{title}}</h1>
      <div class="mt-3">
        <p>{{instruction}}</p>
        <!-- Device MD or higher -->
        <div class="col-md-12 btn-group offset-md-2 hidden-sm-down">
          <a routerLink="/weather" class="btn btn-outline-danger col-md-3">Weather Forecast</a>
          <a routerLink="/tides" class="btn btn-outline-danger col-md-3">Tide & Current</a>
          <a routerLink="/" class="btn btn-outline-danger col-md-3">All</a>
        </div>
        <!-- Device SM or lower -->
        <div class="col-xs-12 hidden-md-up">
          <a routerLink="/weather" class="btn btn-outline-danger btn-block mb-1">Weather Forecast</a>
          <a routerLink="/tides" class="btn btn-outline-danger btn-block mb-1">Tide & Current</a>
          <a routerLink="/" class="btn btn-outline-danger btn-block mb-1">All</a>
        </div>
      </div>
    </div>
  `,
  styles: []
})

export class WeatherHomeComponent implements OnInit {
  title: String = 'Angular Weather App';
  instruction: String = 'Please Select a Weather Service:';
  constructor() { }

  ngOnInit() {
  }

}
