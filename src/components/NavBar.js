import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const NavBarWrapper = styled.nav`
display: flex;
position: fixed;
z-index: 2147483647;
height: 100px;
width: 100%;
background-color: rgb(1, 1, 1, 0.9);
font-weight: 1.1em;
top: 0;
`;

const NavLink = styled(Link)`

  display: flex;
  color: #b78c44;
  width: 200px;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding: 0px;
  text-decoration: none;
  font-size: x-large;
}
&:hover {
  cursor: pointer;
}
&:active {
  transform: translate(2px, 2px);
}
&.active {
  border-bottom: 2px solid #b78c44;
}
`
 

const NavBar = () => {
  let location = useLocation()
  let path = location.pathname  




  return (
    <NavBarWrapper>
      <NavLink className={path === '/home' && 'active'} to="/home">Home</NavLink>
      <NavLink className={path === '/favorites' && 'active'} to="/favorites">Favorites</NavLink>
    </NavBarWrapper>
  );
};

export default NavBar;
