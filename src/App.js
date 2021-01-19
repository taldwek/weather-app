import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import WelcomeModal from "./components/WelcomeModal";
import CardContainer from "./pages/CardContainer";
import {
  getAllFilms,
  updateFavoriteStateInList,
  getFavoriteFilms,
} from "./services/filmServices";
import setShowModalHandler from "./services/modalServices";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const [allFilmsList, setAllFilmsList] = useState([]);
  const [favoriteFilmsList, setFavoriteFilmsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorInFetch, setErrorInFetch] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const films = await getAllFilms();
        setAllFilmsList(films);
      } catch (err) {
        console.log(err);
        setErrorInFetch(true);
      }
    })();
  }, []);

  useEffect(() => {
    const isNewUser = setShowModalHandler();
    setShowModal(isNewUser);
  }, []);

  useEffect(() => {
    const newFavorites = getFavoriteFilms(allFilmsList);
    setFavoriteFilmsList(newFavorites);
  }, [allFilmsList]);

  const favoriteToggle = (e) => {
    const { id } = e.target;
    const newList = updateFavoriteStateInList(id, allFilmsList);
    setAllFilmsList(newList);
  };

  return (
    <Router>
      <div>
        {showModal && <WelcomeModal closeModal={() => setShowModal(false)} />}
        <NavBar />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route
            exact
            path="/home"
            render={() => (
              <CardContainer
                errorInFetch={errorInFetch}
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
                errorInFetch={errorInFetch}
                filmList={favoriteFilmsList}
                favoriteToggle={favoriteToggle}
              />
            )}
          />
          <PageNotFound />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
