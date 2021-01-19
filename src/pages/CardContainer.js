import FilmCard from "../components/FilmCard";
import { ErrorMessage, Container } from "../styles/genericStyles";

const CardContainer = ({ filmList, favoriteToggle }) => {
  return (
    <Container>
      {!filmList.length ? (
        <ErrorMessage>
          <h2>You still don't have any favorites :(</h2>
        </ErrorMessage>
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
