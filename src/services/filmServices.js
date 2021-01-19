import fetchAllFilms from "./ApiServices";

const getAllFilms = async () => {
  const filmsFromLS = getListFromLS();
  if (filmsFromLS === null) {
    const films = await fetchAllFilms();
    saveListToLS(films);
    return films;
  }
  return JSON.parse(filmsFromLS);
};

const saveListToLS = (list) => {
  window.localStorage.setItem("filmsArray", JSON.stringify(list));
};

const getListFromLS = () => {
  return window.localStorage.getItem("filmsArray");
};


const toggleFavorite = (id, filmList) => {
  const newFilmList = updateFilmArray(id, filmList);
  saveListToLS(newFilmList);
  return newFilmList;
};

const updateFilmArray = (id, filmList) => {
  const newFilmList = filmList.map((film) => {
    if (film.episode_id === parseInt(id)) {
      return {
        ...film,
        favorite: !film.favorite,
      };
    } else {
      return film;
    }
  });
  return newFilmList;
};

const getFavoriteFilms = (filmsArray) => {
  const favoriteFilms = filmsArray.filter((film) => film.favorite === true);
  return favoriteFilms;
};

export {
  toggleFavorite,
  getAllFilms,
  updateFilmArray,
  getListFromLS,
  getFavoriteFilms,
};
