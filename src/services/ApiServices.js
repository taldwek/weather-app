import SWAPI_URL from "../consts.js";

const fetchAllFilms = async () => {

  const response = await (await fetch(SWAPI_URL)).json();
  const filmsArray = response.results.map(
    ({
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
    }) => {
      return {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
        favorite: false,
        imageURL: "to be added",
      };
    }
  );
  return filmsArray;
};

export default fetchAllFilms;
