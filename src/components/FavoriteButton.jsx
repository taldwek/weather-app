import React from "react";

const FavoriteButton = ({ favorite, favoriteToggle, city }) => {
  return (
    <button
      className={`favorite-button ${favorite && `inFavorites`}`}
      onClick={favoriteToggle}
      id={city}
    ></button>
  );
};

export default FavoriteButton;
