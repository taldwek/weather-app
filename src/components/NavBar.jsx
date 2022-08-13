import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../styles/navbar.scss";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;
  const isActive = (page) => path === page && 'active'

  return (
    <div className="navbar-wrapper">
      <h1>Weather App</h1>
      <Link className={`nav-link ${isActive('/home')}`} to="/home">
        Home
      </Link>
      <Link
        className={`nav-link ${isActive('/favorites')}`}
        to="/favorites"
      >
        Your Locations
      </Link>
    </div>
  );
};

export default NavBar;
