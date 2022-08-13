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
  const renderLoader = () => {
    return inSearch && <div className="loader"></div>
  }

  return (
    <div className="container">
      {!favoritesPage && <> <Search searchHandler={searchHandler} />
      {!weather && !errorInFetch && !inSearch && <div className="no-query">Search for the weather in any city in the world! Click the star icon to save a city to Your Locations</div> }
      {renderLoader()}
      </>}
      {weather && !inSearch ? (
        <WeatherCard favoriteToggle={favoriteToggle} weather={weather} />
      ) : (
        favoriteWeatherList?.length ?
        favoriteWeatherList.map((item, i) => {
          return <WeatherCard weather={item} key={i} />;
        }) : favoritesPage && <div className="no-saved-locations">You have no saved locations yet :(</div>
      )}
    </div>
  );
};

export default Container;
