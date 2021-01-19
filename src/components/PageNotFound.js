import { Container, ErrorMessage } from "../styles/genericStyles";

const PageNotFound = () => {
  return (
    <Container>
      <ErrorMessage>
        <h2>The page you requested is not found, please try navigating to the Home/Favorites page</h2>
      </ErrorMessage>
    </Container>
  );
};

export default PageNotFound;
