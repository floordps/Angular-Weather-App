import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'weather-weather-forecast',
  template: `
    <h3>Weather Forecast Current Observation</h3>
    <ul>
      <li>Location: {{currentObservationForecast?.display_location?.city}}, {{currentObservationForecast?.display_location?.state}}</li>
      <li>Lat/Lng: {{currentObservationForecast?.display_location?.latitude}}, {{currentObservationForecast?.display_location?.longitude}}</li>
      <li>Weather: {{currentObservationForecast?.weather}}</li>
      <li>Temp (F): {{currentObservationForecast?.temp_f}}</li>
    </ul>

    <h3>Weather Forecast Days</h3>
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
  private currentObservationForecast = {};

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService
      .getForecast()
      .subscribe(
        (data) => { this.forecastdays = [ ...data.simpleforecast.forecastday ] },
        (err) => { console.error(err); }
      );
    this.weatherService
      .getForecastCurrentObservation()
      .subscribe(
        (data) => { this.currentObservationForecast = data },
        (err) => { console.error(err); }
      );
  }

}