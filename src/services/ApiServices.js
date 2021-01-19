import SWAPI_URL from "../consts.js";

const fetchAllFilms = async () => {
  let listfromAPI = null
  try {
   listfromAPI = await fetch(SWAPI_URL)
  } catch (err) {
    console.log(err)
    return []
  }
  const response = await listfromAPI.json();
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
        favorite: false
      };
    }
  );
  return filmsArray;
};

export default fetchAllFilms;
