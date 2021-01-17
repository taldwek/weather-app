import SWAPI_URL from "../consts";

const updateFilmArray = (e, filmList) => {
  const { id } = e.target;
  const newFilmList = filmList.map((film) => {
    if (film.episode_id === parseInt(id)) {
      const newFilm = { ...film };
      newFilm.favorite = !newFilm.favorite;
      return newFilm;
    } else {
      return film;
    }
  });
  return newFilmList;
};

const saveListToLS = (list) => {
  window.localStorage.setItem("filmsArray", JSON.stringify(list));
};

const getAndSetFilmList = async (setFilmList) => {
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

  // error handling for issue with local storage
  saveListToLS(filmsArray);
  setFilmList(filmsArray);
};

export { getAndSetFilmList, saveListToLS, updateFilmArray };
