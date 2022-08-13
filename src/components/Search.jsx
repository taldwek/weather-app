import React, { useState } from "react";

import "../styles/search.scss";

const Search = ({ searchHandler }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const queryWeather = () => {
    searchQuery && searchHandler(searchQuery);
  };

  return (
    <label className="search-field">
      <input
        type="url"
        onChange={inputChangeHandler}
        value={searchQuery}
        placeholder="&nbsp;"
      />
      <span className="placeholder">Enter location</span>
      <div className="search-icon-container">
        <button className="search-icon" onClick={queryWeather}></button>
      </div>
    </label>
  );
};

export default Search;
