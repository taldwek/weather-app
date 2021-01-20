import styled from "styled-components";
import img from "../assets/images/backgrounds/appBackground.jpg";

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
  background-color: #a7af94a8;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
`;

export { ModalContent, ModalWrapper };
