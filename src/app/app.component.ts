import { Component } from '@angular/core';

@Component({
  selector: 'weather-root',
  template: `
  <nav class="navbar navbar-dark bg-danger mb-3" id="header-nav">
    <div class="container">
      <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
      <div class="collapse navbar-toggleable-md" id="navbarResponsive">
        <ul class="nav navbar-nav">
          <li class="nav-item" data-toggle="collapse" data-target="#navbarResponsive.collapse.in">
            <a routerLink="/" routerLinkActive="active" class="nav-link" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target="#navbarResponsive.collapse.in">
            <a routerLink="/weather" routerLinkActive="active" class="nav-link">Weather Forecast</a>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target="#navbarResponsive.collapse.in">
            <a routerLink="/tides" routerLinkActive="active" class="nav-link">Tides & Current</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [`#header-nav {border-radius: 0;}`]
})
export class AppComponent {}
