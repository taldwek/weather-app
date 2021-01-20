import styled from "styled-components";

const ErrorMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 80px;
`;

export { Container, ErrorMessage };
