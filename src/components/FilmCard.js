import React from "react";
import {
  imgStyle,
  Fadeout,
  Card,
  Crawl,
  CardContent,
  FavoriteButton,
} from "../styles/filmCardStyles";

const FilmCard = (props) => {
  const {
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    favorite,
    imgUrl,
  } = props.film;

  const { favoriteToggle } = props;

  return (
    <Card>
      <CardContent>
        <h4>{title}</h4>
        <div>Release Date: {release_date}</div>
        <div>Episode: {episode_id}</div>
        <div>Director: {director}</div>
        <div>Producer: {producer}</div>
        <Crawl>
          {opening_crawl}
          <Fadeout></Fadeout>
        </Crawl>
        <FavoriteButton
          favorite={favorite}
          id={episode_id}
          onClick={favoriteToggle}
        />
      </CardContent>
      <img src={imgUrl} style={imgStyle} alt={title} />
    </Card>
  );
};

export default FilmCard;
