import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import throttle from "lodash.debounce";
import ReactSwitch from "react-switch";

import NavBar from "./components/NavBar";
import Container from "./pages/Container";
import {
  getWeatherByLocation,
  getWeatherFavoritesFromLS,
  updateWeatherFavoritesLS,
} from "./services/weatherServices";

import "./styles/app.scss";

const App = () => {
  const [weather, setWeather] = useState("");
  const [favoriteWeatherList, setFavoriteWeatherList] = useState([]);
  const [errorInFetch, setErrorInFetch] = useState(false);
  const [favoriteState, setFavoriteState] = useState(true);
  const [theme, setTheme] = useState("light");
  const [inSearch, setInSearch] = useState(false);

  // On first render - fetch favorites from localStorage and set favoriteWeatherList
  // Save/remove favorite from localStorage if favoriteState has changed, and update favoriteWeatherList 

  useEffect(() => {
    if (weather) {
      const newFavorites = updateWeatherFavoritesLS(
        weather,
        favoriteWeatherList
      );
      setFavoriteWeatherList(newFavorites);
    } else {
      const favoriteWeatherFromLS = getWeatherFavoritesFromLS();
      favoriteWeatherFromLS !== "undefined" && 
        setFavoriteWeatherList(JSON.parse(favoriteWeatherFromLS));
    }
  }, [favoriteState]);

  // Fetch updated data every 15 seconds and set the state accordingly. 
  // getAndSetWeather will be invoked only if weather is truthy (a query was successful), and there is no search in progress (in order to ensure the correct 'weather' staten is being used)

  useEffect(() => {
    const interval = setInterval(async () => {
      weather && !inSearch && getAndSetWeather(weather.currentWeather.city, true)
    } ,15000);
    return () => clearTimeout(interval);
    }
  );

  // Following a search, updates the inSearch state, gets and sets the new weather value. Sets errorInFetch if search is unsuccessful

  const getAndSetWeather = async (location, fromInterval = false) => {
    if (!fromInterval) {
      setInSearch(true)
    }
    const weatherData = await getWeatherByLocation(location);
    if (Object.keys(weatherData).length) {
      setWeather(weatherData);
      if (errorInFetch) {
        setErrorInFetch(false);
      }
    } else {
      setWeather("");
      setErrorInFetch(true);
    }
    setInSearch(false);
  };

  // Search handler

  const searchHandler = (location) => {
    getAndSetWeather(location);
  };

  // throttle search to be performed at most once every 1 seconds, using lodash throttle method

  const throttledSearch = throttle(searchHandler, 1000);

  // Toggle favoriteState for an item

  const favoriteToggle = () => {
    setWeather({ ...weather, favorite: !weather.favorite });
    setFavoriteState(!favoriteState);
  };

  // Toggle Theme (dark/light mode)

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
                searchHandler={throttledSearch}
                inSearch={inSearch}
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
         <Redirect to ="/" />
        </Switch>
        {errorInFetch && <div className="error" >We're sorry please try searching for a different location</div>}
      </div>
    </Router>
  );
};

export default App;
