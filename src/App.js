import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import WelcomeModal from "./components/WelcomeModal";
import CardContainer from "./pages/CardContainer";
import {
  getAllFilms,
  toggleFavorite,
  getFavoriteFilms,
} from "./services/filmServices";
import setShowModalHandler from "./services/modalServices";

const App = () => {
  const [allFilmsList, setAllFilmsList] = useState([]);
  const [favoriteFilmsList, setFavoriteFilmsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorInFetch, setErrorInFetch] = useState(false)

  useEffect(() => {
    setShowModal(setShowModalHandler());
  }, []);

  useEffect(() => {
    (async function () {
      try {
      const films = await getAllFilms();
      setAllFilmsList(films);
      } catch(err) {
        err === "TypeError: Failed to fetch" && setErrorInFetch(true)
      }
    })();
  }, []);

  useEffect(() => {
    const newFavorites = getFavoriteFilms(allFilmsList);
    setFavoriteFilmsList(newFavorites);
  }, [allFilmsList]);

  const favoriteToggle = (e) => {
    const { id } = e.target;
    const newList = toggleFavorite(id, allFilmsList);
    setAllFilmsList(newList);
  };

  return (
    <Router>
      <div>
        {showModal && <WelcomeModal closeModal={() => setShowModal(false)} />}
        <NavBar />
        <Redirect from="/" to="/home" />       
        <Route
          exact
          path="/home"
          render={() => (
            <CardContainer
              filmList={allFilmsList}
              favoriteToggle={favoriteToggle}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <CardContainer
              filmList={favoriteFilmsList}
              favoriteToggle={favoriteToggle}
            />
          )}
        />
      </div>
    </Router>
  );
};

export default App;
