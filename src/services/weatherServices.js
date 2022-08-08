import fetchWeather from "./ApiServices";

const getWeatherByLocation = async (cityName) => {
  let returnedWeather = {};
  try {
    const weather = await fetchWeather(cityName);
    weather.favorite = false;
    const currentWeather = weather.currentWeather.data[0];
    const forecastWeather = weather.forecastWeather.data;

    returnedWeather = {
      favorite: false,
      currentWeather: {
        temp: currentWeather.app_temp,
        city: currentWeather.city_name,
        generalWeather: currentWeather.weather,
      },
      forecastWeather: forecastWeather.map((item) => {
        return {
          temp: item.app_temp,
          time: item.timestamp_local,
          generalWeather: item.weather,
        };
      }),
    };
  } catch (error) {
    console.log(error);
  }
  return returnedWeather;
};

const getWeatherFavoritesFromLS = () => {
  return window.localStorage.getItem("weatherFavorites");
};

const updateWeatherFavoritesLS = (weatherObject, favoriteWeatherList) => {
  const id = weatherObject.currentWeather.city;
  let newFavoriteWeatherList = [];
  if (weatherObject.favorite) {
    if (!favoriteWeatherList.length) {
      newFavoriteWeatherList.push(weatherObject);
      return newFavoriteWeatherList;
    } else {
      favoriteWeatherList.push(weatherObject);
      return favoriteWeatherList;
    }
  }
  newFavoriteWeatherList = favoriteWeatherList.filter((weather) => {
    return (
      weather.currentWeather.city.replace(/\s/g, "").toLowerCase().trim() !==
      id.replace(/\s/g, "").toLowerCase().trim()
    );
  });
  return newFavoriteWeatherList;
};

// const errorToDisplay = (error, filmList) => {

//   return error ? (
//     <h2>
//       Oooops, it seems like we're having issues with retrieving data at this
//       time. Please come back later!
//     </h2>
//   ) : !filmList.length ? (
//     <h2>Looks like you don't have any favorites :(</h2>
//   ) : null;
// };

export {
  getWeatherByLocation,
  updateWeatherFavoritesLS,
  getWeatherFavoritesFromLS,
  // errorToDisplay,
};
