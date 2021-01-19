import { ModalWrapper, ModalContent } from "../styles/genericStyles";

const ErrorPage = () => {
  return (
    <ModalWrapper>
      <ModalContent>
        <h2>
          Oooops, it seems like we're having issues with retrieving data at this
          time. Please come back later!
        </h2>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ErrorPage;
