import { useState, useEffect } from "react";
import FilmCard from "./components/FilmCard";
import Header from "./Header";
import { getAndSetFilmList, saveListToLS, updateFilmArray } from "./utils/utils";
import styled from "styled-components";

const AppHeader = styled.div`
  height: 100px;
  padding: 20px;
  color: white;
`;

const Container = styled.div`
  display: grid;
  align-items: start;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 500px);
  grid-gap: 70px;
  margin: 50px;
`;

const App = () => {
  const [filmList, setFilmList] = useState([]);

  // when film array returns empty need to show 'Page Under Maintenance' - how to do it
  // divide into header and container

  useEffect(() => {
    const filmsArray = window.localStorage.getItem("filmsArray");
    filmsArray ? setFilmList(JSON.parse(filmsArray)) : getAndSetFilmList(setFilmList);
  }, []);

  const favoriteToggle = (e) => {
    console.log(filmList)
    const newFilmList =  updateFilmArray(e, filmList);
    saveListToLS(newFilmList);
    setFilmList(newFilmList);
  };

  console.log(filmList);

  return (
    <div>
      <AppHeader>
        <Header />
      </AppHeader>
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
