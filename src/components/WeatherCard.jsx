import React from "react";
import FavoriteButton from "./FavoriteButton";

import "../styles/weatherCardStyles.scss";

const WeatherCard = (props) => {
  const { weather, favoriteToggle } = props;
  console.log(weather)

  const renderFavoriteButton = () => {
    return (
      <FavoriteButton
        favorite={weather.favorite}
        favoriteToggle={favoriteToggle}
        city={weather.currentWeather.city}
      />
    );
  };

  const timeParser = (timestamp) => {
    const regex = new RegExp('(.*00):00')
    const parsedTime = timestamp.replaceAll("-", "/").replace("T", " ").match(regex)[1]
    return parsedTime
  }

  return (
    <div className="weather-card">
      <div className="current-weather">
        <div className="location">{weather.currentWeather.city}</div>
        <div className="temperature">{weather.currentWeather.temp}</div>
              <img className="weather-icon" alt="weather-icon" src={require(`../assets/images/icons/${weather.currentWeather.generalWeather.icon}.png`)}/>
        <p>{weather.currentWeather.generalWeather.description}</p>
        {favoriteToggle && renderFavoriteButton()}
      </div>
      <div className="forecast-container">
        {weather.forecastWeather.map((item, i) => {
          return (
            <div className="forecast-item" key={i}>
              <div className="time">{timeParser(item.time)}</div>
              <img className="weather-icon" alt="weather-icon" src={require(`../assets/images/icons/${item.generalWeather.icon}.png`)}/>              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherCard;
