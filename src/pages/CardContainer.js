import FilmCard from "../components/FilmCard";
import { ErrorMessage, Container } from "../styles/genericStyles";

const CardContainer = ({ errorInFetch, filmList, favoriteToggle }) => {
  let errorMessage = null;

  if (errorInFetch) {
    errorMessage = (
      <h2>
        Oooops, it seems like we're having issues with retrieving data at this
        time. Please come back later!)
      </h2>
    );
  } else if (!filmList.length) {
    errorMessage = <h2>You still don't have any favorites :(</h2>;
  }

  return (
    <Container>
      {errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
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
