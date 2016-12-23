import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'weather-weather-forecast',
  template: `
    <p>
      weather-forecast Works!
    </p>
    <ul>
      <li *ngFor="let day of forecastdays">
        Day: {{day.date.weekday}}<br>
        Conditions: {{day.conditions}}<br>
        Low: {{day.low.fahrenheit}}, High: {{day.high.fahrenheit}}<br>
      </li>
    </ul>
  `,
  styles: [],
  providers: [ WeatherService ]
})
export class WeatherForecastComponent implements OnInit {

  private forecastdays = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService
      .getForecast()
      .subscribe(
        (data) => { this.forecastdays = [ ...data.simpleforecast.forecastday ] },
        (err) => { console.error(err); }
      );
  }

}