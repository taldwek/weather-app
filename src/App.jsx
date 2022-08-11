import React, { useState, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import debounce from "lodash.debounce";

import NavBar from "./components/NavBar";
import Container from "./pages/Container";
import {
  getWeatherByLocation,
  getWeatherFavoritesFromLS,
  updateWeatherFavoritesLS,
} from "./services/weatherServices";
import ReactSwitch from "react-switch";

import "./styles/app.scss";

const App = () => {
  const [weather, setWeather] = useState("");
  const [favoriteWeatherList, setFavoriteWeatherList] = useState([]);
  const [errorInFetch, setErrorInFetch] = useState(false);
  const [favoriteState, setFavoriteState] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  });

  useEffect(() => {
    if (weather) {
      const newFavorites = updateWeatherFavoritesLS(
        weather,
        favoriteWeatherList
      );
      localStorage.setItem("weatherFavorites", JSON.stringify(newFavorites));
      setFavoriteWeatherList(newFavorites);
    } else {
      const favoriteWeatherFromLS = getWeatherFavoritesFromLS();
      favoriteWeatherFromLS &&
        setFavoriteWeatherList(JSON.parse(favoriteWeatherFromLS));
    }
  }, [favoriteState]);

  const getAndSetWeather = async (location) => {
    const weatherData = await getWeatherByLocation(location);
    if (Object.keys(weatherData).length) {
      setWeather(weatherData);
    } else {
      setErrorInFetch(true);
    }
  };

  const searchHandler = (location) => {
    getAndSetWeather(location);
  };

  const favoriteToggle = () => {
    setWeather({ ...weather, favorite: !weather.favorite });
    setFavoriteState(!favoriteState);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(searchHandler, 3000);
  }, []);

  useEffect(() => {
    if (weather) {
    const interval = setInterval(async () => {
      getAndSetWeather(weather.currentWeather.city)
    } ,5000);
    return () => clearTimeout(interval);
    }
  });

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="app" id={theme === "dark" ? "dark" : "light"}>
        <NavBar />
        <div className="switch">
          <label>
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route
            exact
            path="/home"
            render={() => (
              <Container
                errorInFetch={errorInFetch}
                weather={weather}
                favoriteToggle={favoriteToggle}
                searchHandler={debouncedSearch}
              />
            )}
          />
          <Route
            exact
            path="/favorites"
            render={() => (
              <Container
                errorInFetch={errorInFetch}
                favoriteToggle={favoriteToggle}
                favoriteWeatherList={favoriteWeatherList}
                favoritesPage={true}
              />
            )}
          />
        </Switch>
        {errorInFetch && <div className="error" >We're sorry please try searching for a different location</div>}
      </div>
    </Router>
  );
};

export default App;
