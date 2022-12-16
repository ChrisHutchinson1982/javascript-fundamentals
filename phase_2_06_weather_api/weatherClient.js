const { get } = require("callback-fetch");

class WeatherClient {
  fetchWeatherData(city, callBack) {
    const apiKey = process.env.OPENWEATHER; // include our key
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    get(apiUrl, (response) => {
      const weatherData = JSON.parse(response);
      callBack(weatherData);
    });
  }
}

module.exports = WeatherClient;

// const client = new WeatherClient();

// client.fetchWeatherData("Bristol", (weatherData) => {
//   console.log(weatherData.id);
// });
