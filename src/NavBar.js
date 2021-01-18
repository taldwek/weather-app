import styled from "styled-components";

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 70px;
  background-color: #0a1612a3;
  font-weight: 1.1em;`

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
