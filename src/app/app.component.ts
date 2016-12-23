import { Component } from '@angular/core';

@Component({
  selector: 'weather-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'weather works!';
}
