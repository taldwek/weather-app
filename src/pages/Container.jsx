import WeatherCard from "../components/WeatherCard";
import Search from "../components/Search";

import "../styles/container.scss";

const Container = ({
  weather,
  favoriteToggle,
  searchHandler,
  favoriteWeatherList,
  favoritesPage,
}) => {
  return (
    <div className="container">
      {!favoritesPage && <Search searchHandler={searchHandler} />}
      {weather ? (
        <WeatherCard favoriteToggle={favoriteToggle} weather={weather} />
      ) : (
        favoriteWeatherList?.length &&
        favoriteWeatherList.map((item, i) => {
          return <WeatherCard weather={item} key={i} />;
        })
      )}
    </div>
  );
};

export default Container;
