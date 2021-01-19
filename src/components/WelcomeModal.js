import styled from "styled-components";
import { ModalWrapper, ModalContent } from "../styles/genericStyles";

const ModalButton = styled.button`
  font-family: inherit;
  font-size: 1em;
  border: 0;
  padding: 0;
  width: 120px;
  min-height: 100px;
  color: #ffe81f;
  background-color: #010f03;
  margin-top: 30px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translate(2px, 2px);
  }
  &:focus {
    outline: none !important;
  }
`;

const ModalHeader = styled.h1`
  margin-top: 10px;
  `
const ModalText = styled.p`
  margin-top: 10px;
  `

const WelcomeModal = ({ closeModal }) => {
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>Welcome to the world of Star Wars!</ModalHeader>
        <ModalText>Browse through all the movies and save your favorite ones</ModalText>
        <ModalButton onClick={closeModal}>Let's Begin!</ModalButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default WelcomeModal;
