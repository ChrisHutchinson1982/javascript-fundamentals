const { get } = require("callback-fetch");
const apiKey = process.env.OPENWEATHER; // include our key
const city = "London";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

get(apiUrl, (response) => {
  weatherData = JSON.parse(response);
  console.log(weatherData);
});

console.log("Requesting weather data");
