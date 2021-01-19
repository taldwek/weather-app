import styled from "styled-components";
import img from "../assets/images/background.jpg";

const ModalWrapper = styled.dialog`
  overflow: hidden;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 2147483647;
  background-image: url(${img});
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 600px;
  height: 50%;
  align-items: center;
  justify-content: center;
  background-color: #b7c29c;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
`;

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
