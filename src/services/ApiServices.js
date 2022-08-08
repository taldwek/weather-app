import API_KEY from "../consts.js";

const fetchWeather = async (cityName) => {
  const currentWeatherAPI = `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${API_KEY}`;
  const forecastWeatherAPI = `https://api.weatherbit.io/v2.0/forecast/hourly?city=${cityName}&key=${API_KEY}`;
  let weatherFromAPI = {};
  try {
    weatherFromAPI.currentWeather = await (
      await fetch(currentWeatherAPI)
    ).json();
    weatherFromAPI.forecastWeather = await (
      await fetch(forecastWeatherAPI)
    ).json();
  } catch (err) {
    console.log(err);
    return {};
  }
  return weatherFromAPI;
};

export default fetchWeather;
