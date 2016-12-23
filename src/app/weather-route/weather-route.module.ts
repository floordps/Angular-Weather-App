import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { WeatherHomeComponent } from '../weather-home/weather-home.component';
import { WeatherTidescurrentComponent } from '../weather-tidescurrent/weather-tidescurrent.component';

const routes: Routes = [
  {path: '', component: WeatherHomeComponent, pathMatch: 'full'},
  {path: 'weather', component: WeatherForecastComponent},
  {path: 'tides', component: WeatherTidescurrentComponent},
  {path: '**', redirectTo: '/'}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    WeatherForecastComponent,
    WeatherHomeComponent,
    WeatherTidescurrentComponent
  ],
  exports: [RouterModule]
})
export class WeatherRouteModule { }
