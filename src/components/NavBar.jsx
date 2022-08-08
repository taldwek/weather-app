import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import "../styles/navbar.scss";

const NavBar = (props) => {
  let location = useLocation();
  let path = location.pathname;

  return (
    <div className="navbar-wrapper">
      <h1>Weather App</h1>
      <Link className={`nav-link ${path === "/home" && "active"}`} to="/home">
        Home
      </Link>
      <Link
        className={`nav-link ${path === "/favorites" && "active"}`}
        to="/favorites"
      >
        Your Locations
      </Link>
    </div>
  );
};

export default NavBar;
