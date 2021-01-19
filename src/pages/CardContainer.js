import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import { errorToDisplay } from "../services/filmServices";
import { ErrorMessage, Container } from "../styles/genericStyles";

const CardContainer = ({ errorInFetch, filmList, favoriteToggle }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const error = errorToDisplay(errorInFetch, filmList);
    setErrorMessage(error);
  }, [errorInFetch, filmList]);

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
