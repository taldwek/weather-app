import styled from "styled-components";
import img from "../assets/images/background.jpg"

const ModalWrapper = styled.dialog`
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
  width: 60%;
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
  width: 150px;
  height: 100px;
  color: #ffe81f;
  background-color: #010f03;
  margin-top: 50px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  &:active  {
    transform: translate(2px, 2px)
  }
  &:focus {
    outline: none !important;
  }
`

const WelcomeModal = ({closeModal}) => {
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h1>Welcome to the world of Star Wars!</h1>
        <p>
          Browse through and save your favourite films using the star icon
        </p>
        <ModalButton onClick={closeModal}>Let's Begin!</ModalButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default WelcomeModal;
