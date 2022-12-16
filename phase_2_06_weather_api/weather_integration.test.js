const WeatherClient = require("./weatherClient");
const Weather = require("./weather");

describe("weather integration", () => {
  it("gets the weather data for a city fetched by the WeatherClient class", (done) => {
    const client = new WeatherClient();
    const weather = new Weather(client);
    weather.fetch("Bristol");

    setTimeout(() => {
      const weatherData = weather.getWeatherData();
      expect(weatherData.id).toBe(4931378);
      done();
    }, 3000);
  });
});
