import fetchWeather from './ApiServices';

// Runs when search is performed, returns a weather object provided by the ApiService

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
  return window.localStorage.getItem('weatherFavorites');
};

const standartize = (str) => str.replace(/\s/g, '').toLowerCase().trim();

const compareCityToFavorites = (id, favoriteWeatherList) => {
  return favoriteWeatherList.find((weather) => {
    return standartize(weather.currentWeather.city) === standartize(id);
  });
};

const updateWeatherFavoritesLS = (weatherObject, favoriteWeatherList) => {
  const id = weatherObject.currentWeather.city;
  const markAsFavorite = weatherObject.favorite;

  const newFavorites = () => {
    let newFavoriteWeatherList = favoriteWeatherList ? [...favoriteWeatherList] : []  
    debugger;
    if (markAsFavorite) {
      const isCityInFavorites = compareCityToFavorites(id, newFavoriteWeatherList);
      if (isCityInFavorites) {
        return favoriteWeatherList;
      }
      newFavoriteWeatherList.push(weatherObject);
      localStorage.setItem("weatherFavorites", JSON.stringify(newFavoriteWeatherList));
      return newFavoriteWeatherList;
    } else {
      newFavoriteWeatherList = favoriteWeatherList.filter((weather) => {
        return (
          standartize(weather.currentWeather.city) !==
          standartize(id)
        );
      });
      localStorage.setItem("weatherFavorites", JSON.stringify(newFavorites));
      return newFavoriteWeatherList;
    }
  }

  return newFavorites()
};

export {
  getWeatherByLocation,
  updateWeatherFavoritesLS,
  getWeatherFavoritesFromLS,
};
