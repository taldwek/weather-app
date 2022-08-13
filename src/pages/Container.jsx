import WeatherCard from "../components/WeatherCard";
import Search from "../components/Search";

import "../styles/container.scss";

const Container = ({
  weather,
  favoriteToggle,
  searchHandler,
  favoriteWeatherList,
  favoritesPage,
  errorInFetch,
  inSearch
}) => {
  return (
    <div className="container">
      {!favoritesPage && <> <Search searchHandler={searchHandler} />
      {!weather && !errorInFetch && !inSearch && <div className="no-query">Search for the weather in any city in the world! Click the star icon to save a city to Your Locations</div> }
      {inSearch && <div className="loader"></div>}
      </>}
      {weather && !inSearch ? (
        <WeatherCard favoriteToggle={favoriteToggle} weather={weather} />
      ) : (
        favoriteWeatherList?.length ?
        favoriteWeatherList.map((item, i) => {
          return <WeatherCard favoriteToggle={favoriteToggle} weather={item} key={i} />;
        }) : favoritesPage && <div>You have no saved locations yet :(</div>
      )}
    </div>
  );
};

export default Container;
