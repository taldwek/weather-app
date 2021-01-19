import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarWrapper = styled.nav`
  display: flex;
  position: fixed;
  z-index: 2147483647;
  align-items: center;
  justify-content: start;
  height: 80px;
  width: 100%;
  background-color: rgb(1, 1, 1, 0.9);
  font-weight: 1.1em;
  padding: 5px;
  top: 0;
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <Link to="/home">Home</Link>
      <Link to="/favorites">Favourites</Link>
      {/* <NavBarLink>About</NavBarLink> */}
    </NavBarWrapper>
  );
};

export default NavBar;
