import React, { useState } from "react";

import "../styles/searchBoxStyles.scss";

const Search = (props) => {
  const [location, setLocation] = useState("");

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  const searchHandler = () => {
    props.searchHandler(location);
  };

  return (
    <label className="search-field">
      <input
        type="url"
        onChange={inputChangeHandler}
        value={location}
        placeholder="&nbsp;"
      />
      <span className="placeholder">Enter location</span>
      <div className="search-icon-container">
        <button className="search-icon" onClick={searchHandler}></button>
      </div>
    </label>
  );
};

export default Search;
