import SWAPI_URL from "../consts.js";

const updateAndSaveFilmList = (e, filmList, setFilmList) => {
  const newFilmList = updateFilmArray(e, filmList);
  saveFilmListToLS(newFilmList);
  setFilmList(newFilmList);
};

const fetchFilmList = async () => await (await fetch(SWAPI_URL)).json();

const getListFromLS = () => window.localStorage.getItem('filmsArray');

const getCachedFilmList = async () => {
  const filmsArray = getListFromLS();
  if(!filmsArray) {
    const films = fetchFilmList();
    saveFilmListToLS(films);
    return films;
  }
  return JSON.parse(filmsArray)
};


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

const saveFilmListToLS = (list) => {
  window.localStorage.setItem("filmsArray", JSON.stringify(list));
};


const getAndSetFilmList = async (setFilmList) => {
  const response = fetchFilmList()
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

  saveFilmListToLS(filmsArray);
  return filmsArray;
};

export {
  getCachedFilmList,
  getAndSetFilmList,
  updateAndSaveFilmList,
  saveFilmListToLS,
  updateFilmArray,
  getListFromLS
};
