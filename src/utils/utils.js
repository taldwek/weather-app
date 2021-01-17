import SWAPI_URL from "../consts";

const getFilmList = async () => {
  const response = await (await fetch(SWAPI_URL)).json();
  const filmsArray = response.results.map((film) => {
    const {
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
    } = film;

    return {
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
      favorite: false,
      backgroundImage: "to be added",
    };
  });
  window.localStorage.setItem("filmsArray", JSON.stringify(filmsArray));
  console.log(filmsArray)
  // error handling for issue with local storage
  return filmsArray;
};

export default getFilmList;
