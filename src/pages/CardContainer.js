import FilmCard from "../components/FilmCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 80px;
`;

const NoFavsMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -330px;
`;

const CardContainer = ({ filmList, favoriteToggle }) => {
  return (
    <Container>
      {!filmList.length ? (
        <NoFavsMessage>
          <h2>You still don't have any favorites :(</h2> 
        </NoFavsMessage>
      ) : (
        filmList.map((film) => {
          return (
            <FilmCard
              key={film.episode_id}
              favoriteToggle={favoriteToggle}
              film={film}
            />
          );
        })
      )}
    </Container>
  );
};

export default CardContainer;
