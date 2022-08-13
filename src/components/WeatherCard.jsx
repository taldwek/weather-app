import React, { useRef } from 'react';
import FavoriteButton from './FavoriteButton';

import '../styles/weatherCard.scss';


  const timeParser = (timestamp) => {
    const regex = new RegExp('(.*00):00');
    const parsedTime = timestamp
      .replaceAll('-', '/')
      .replace('T', ' ')
      .match(regex)[1];
    return parsedTime;
  };

const WeatherCard = ({ weather, favoriteToggle }) => {
  const { currentWeather, favorite } = weather
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="weather-card">
      <div className="current-weather">
        <div className="location">{currentWeather.city}</div>
        <div className='weather-description'>
          <img
            className="weather-icon"
            alt="weather-icon"
            src={require(`../assets/images/icons/${currentWeather.generalWeather.icon}.png`)}
          />
        <p>{currentWeather.generalWeather.description}</p>
        </div>
        <div className="temperature">{currentWeather.temp}&deg;C</div>
        {favoriteToggle && (
          <FavoriteButton
            favorite={favorite}
            favoriteToggle={favoriteToggle}
            city={currentWeather.city}
          />
        )}
      </div>
      <div className="forecast-container" ref={ref}>
        <div className="scroll-left" onClick={() => scroll(-600)}></div>
        {weather.forecastWeather.map((item, i) => {
          return (
            <div className="forecast-item" key={i}>
              <div className="time">{timeParser(item.time)}</div>
              <img
                className="weather-icon"
                alt="weather-icon"
                src={require(`../assets/images/icons/${item.generalWeather.icon}.png`)}
              />
            </div>
          );
        })}
        <div className="scroll-right" onClick={() => scroll(+600)}></div>
      </div>
    </div>
  );
};

export default WeatherCard;
