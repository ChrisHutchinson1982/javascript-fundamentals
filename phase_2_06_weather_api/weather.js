const WeatherClient = require("./weatherClient");

class Weather {
  constructor(client) {
    this.client = client;
    this.response = [];
  }

  fetch(city) {
    this.client.fetchWeatherData(city, (response) => {
      this.response = response;
    });
  }

  getWeatherData() {
    return this.response;
  }
}

module.exports = Weather;

// const client = new WeatherClient();
// const weather = new Weather(client);

// weather.fetch("Bristol");

// setTimeout(() => {
//   const weatherData = weather.getWeatherData();
//   console.log(weatherData.id);
// }, 2000);
