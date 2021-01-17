import { useState, useEffect } from "react";
import FilmCard from "./components/FilmCard";
import Header from "./Header";
import getFilmList from "./utils/utils";
import styled from "styled-components";
import img from "./assets/images/background.jpg";

const AppWrapper = styled.div`
  height: 100vh;
  text-align: center;
  background-image: url(${img});
  color: white;
`;

const AppHeader = styled.div`
  height: 100px;
  padding: 20px;
  color: white;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  color: white;
`;

const App = () => {
  const [filmList, setFilmList] = useState([]);

  // when film array returns empty need to show 'Page Under Maintenance' - how to do it
  // divide into header and container

  useEffect(() => {
    const filmsArray = window.localStorage.getItem("filmsArray");
    filmsArray
      ? setFilmList(JSON.parse(filmsArray))
      : setFilmList(getFilmList());
  }, []);

  return (
    <AppWrapper>
      <AppHeader>
        <Header />
      </AppHeader>
      <Container>
      {filmList.length &&
        filmList.map((film) => {
          return <FilmCard key={film.episode_id} film={film} />;
        })}
        </Container>
    </AppWrapper>
  );
};

export default App;
