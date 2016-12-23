import { AngularWeatherAppPage } from './app.po';

describe('angular-weather-app App', function() {
  let page: AngularWeatherAppPage;

  beforeEach(() => {
    page = new AngularWeatherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('weather works!');
  });
});
