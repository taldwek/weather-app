import styled from "styled-components";

const NavBarWrapper = styled.nav`
  display: flex;
  position: fixed;
  z-index: 2147483647;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  width: 100%;
  background-color: rgb(1,1,1);
  font-weight: 1.1em;
  top: 0`

  const NavBarLink = styled.a`
  color: #FFE81F;
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 40px;
  padding-right: 10px;
  &:hover {
    cursor: pointer;
  }
  &:active  {
    transform: translate(2px, 2px)
  }`


const NavBar = () => {
  return (
  <NavBarWrapper>
  <NavBarLink>Home</NavBarLink>
  <NavBarLink>Favourites</NavBarLink>
  <NavBarLink>About</NavBarLink>
  </NavBarWrapper>)
};

export default NavBar;
