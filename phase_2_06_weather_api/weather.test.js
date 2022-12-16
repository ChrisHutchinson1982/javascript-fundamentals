const Weather = require("./weather");

describe("weather", () => {
  it("gets the weather data for a city fetched by the WeatherClient class", () => {
    const mockedClient = {
      fetchWeatherData: (city, callBack) => {
        callBack({
          id: 4931378,
          name: "Bristol",
        });
      },
    };

    const weather = new Weather(mockedClient);
    weather.fetch("Bristol");

    expect(weather.getWeatherData()).toEqual({
      id: 4931378,
      name: "Bristol",
    });
  });
});
