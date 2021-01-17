import { useState, useEffect } from "react";
import FilmCard from "./components/FilmCard";
import Header from "./Header";
import getFilmList from "./utils/utils";
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
    filmsArray
    ? setFilmList(JSON.parse(filmsArray))
    : getFilmList(setFilmList);
  }, []);
  
  const favoriteToggle = (e) => {
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
    setFilmList(newFilmList);
  };
  
  console.log(filmList)
  
  
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
