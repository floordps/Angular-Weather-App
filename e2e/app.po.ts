import { browser, element, by } from 'protractor';

export class AngularWeatherAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('weather-root h1')).getText();
  }
}
