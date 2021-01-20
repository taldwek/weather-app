import SWAPI_URL from "../consts.js";
import imageUrlArray from "../styles/filmImages"


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
    }) =>
    
    {
      console.log(imageUrlArray[episode_id-1])
      return {
        title,
        episode_id,
        opening_crawl,
        director,
        producer,
        release_date,
        favorite: false,
        imgUrl: imageUrlArray[episode_id-1]
      };
    }
  );
  return filmsArray;
};

export default fetchAllFilms;
