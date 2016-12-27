import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, AsyncSubject } from 'rxjs/Rx';
import api from '../assets/weatherApiConfig';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

  private apiRoute: string = `${api.domain}${api.key}${api.tideForecastRoute}`;
  private subject: AsyncSubject<{}>;

  constructor(private http: Http) { }

  fetchRoute(transform) {
    return Observable.create((observer) => {
      if (!this.subject) {
        this.subject = new AsyncSubject();
        this.http.get(this.apiRoute).subscribe(this.subject);
      }
      return this.subject.subscribe(observer);
    })
    .map((resp: Response) => transform(resp.json()))
    .catch((error: any) =>
      Observable.throw(error.json().error || 'WeatherService fetchRoute error'));
  }

  getTide() {
    return this.fetchRoute(({tide}) => tide);
  }

  getForecast() {
    return this.fetchRoute(({forecast}) => forecast);
  }

  getForecastCurrentObservation() {
    return this.fetchRoute(({current_observation}) => current_observation);
  }

}
