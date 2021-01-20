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
  list.length &&
    window.localStorage.setItem("filmsArray", JSON.stringify(list));
};

const getListFromLS = () => {
  return window.localStorage.getItem("filmsArray");
};

const updateFavoriteStateInList = (id, filmList) => {
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

const errorToDisplay = (error, filmList) => {
  if (error) {
    return (
      <h2>
        Oooops, it seems like we're having issues with retrieving data at this
        time. Please come back later!
      </h2>
    );
  } else if (!filmList.length) {
    return <h2>Looks like you don't have any favorites :(</h2>;
  } else {
    return null;
  }
};

export {
  updateFavoriteStateInList,
  getAllFilms,
  updateFilmArray,
  getListFromLS,
  getFavoriteFilms,
  errorToDisplay,
};
