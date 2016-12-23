import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'weather-weather-forecast',
  template: `
    <p>
      weather-forecast Works!
    </p>
    <div class="table-responsive">
      <table class="table">
        <tr>
          <th *ngFor="let day of forecastdays">
            <b>{{day.date.weekday}}</b>
          </th>
        </tr>
        <tr>
          <td *ngFor="let day of forecastdays">
            <div>
              <img src="{{day.icon_url}}">
              <span>{{day.conditions}}</span>
            </div>
            Low: {{day.low.fahrenheit}}F, High: {{day.high.fahrenheit}}F
          </td>
        </tr>
      </table>
    </div>
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