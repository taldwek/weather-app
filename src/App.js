import { useState, useEffect } from "react";
import FilmCard from "./components/FilmCard";
import NavBar from "./components/NavBar";
import WelcomeModal from "./components/WelcomeModal";
import styled from "styled-components";
import { getCachedFilmList, updateAndSaveFilmList } from "./services/filmServices";
import setShowModalHandler from "./services/modalServices"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // grid-template-columns: 1
  // grid-template-columns: repeat(auto-fill, 450px);
  // grid-gap: 60px;
  margin-bottom: 30px;
  margin-top: 80px;
`;

const App = () => {
  const [filmList, setFilmList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useState(() => {
    setShowModal(setShowModalHandler())
  });

  useEffect(() => {
    (async function () {
      const films = await getCachedFilmList()
      setFilmList(films)
    })()
  }, []);

  const favoriteToggle = (e) => {
    updateAndSaveFilmList(e, filmList, setFilmList);
  };

  return (
    <div>
      {showModal && <WelcomeModal closeModal={() => setShowModal(false)} />}
      <NavBar />
      <Container>
        {filmList.length &&
          filmList.map((film) => {
            return (
              <FilmCard
                key={film.episode_id}
                favoriteToggle={favoriteToggle}
                film={film}
              />
            );
          })}
      </Container>
    </div>
  );
};

export default App;
