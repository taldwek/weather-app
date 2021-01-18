import SWAPI_URL from "../consts";

const updateAndSaveFilmList = (e, filmList, setFilmList) => {
  const newFilmList = updateFilmArray(e, filmList);
  saveFilmListToLS(newFilmList);
  setFilmList(newFilmList);
};

const getListFromLS = () => window.localStorage.getItem('filmsArray');

const setFilmListHandler = (setFilmList) => {
  const filmsArray = getListFromLS();
  filmsArray
    ? setFilmList(JSON.parse(filmsArray))
    : getAndSetFilmList(setFilmList);
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

  saveFilmListToLS(filmsArray);
  setFilmList(filmsArray);
};

export {
  setFilmListHandler,
  getAndSetFilmList,
  updateAndSaveFilmList,
  saveFilmListToLS,
  updateFilmArray,
  getListFromLS
};
