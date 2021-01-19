import FilmCard from "../components/FilmCard";
import styled from "styled-components";

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

const CardContainer = ({ filmList, favoriteToggle }) => {

  return (
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
  );
};

export default CardContainer;
