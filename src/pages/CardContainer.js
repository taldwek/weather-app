import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import { ErrorMessage, Container } from "../styles/genericStyles";

const CardContainer = ({ errorInFetch, filmList, favoriteToggle }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let errorToDisplay = null;
    if (errorInFetch) {
        errorToDisplay = (
        <h2>
          Oooops, it seems like we're having issues with retrieving data at this
          time. Please come back later!)
        </h2>
      );
    } else if (!filmList.length) {
      errorToDisplay = <h2>You still don't have any favorites :(</h2>;
    }
    setErrorMessage(errorToDisplay);
  },[errorInFetch, filmList]);

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
