import styled from "styled-components";
import unlikeButton from "../assets/images/like-button.png";
import likeButton from "../assets/images/unlike-button.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// fix the font awsome issue and use the star instead of the div
// or just find a workaround and use the button

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
  width: 90%;
  padding: 0 20px;
  background: #282727;
  margin: 40px;
  border-radius: 8px;
  opacity: 0.8;
`;

const Button = styled.div`
  role: button;
  position: absolute;
  height: 50px;
  width: 50px;
  margin: 12px;
  top: 0;
  right: 0;
  background: ${(props) =>
    props.favorite === false
      ? `url(${likeButton}) no-repeat center center;`
      : `url(${unlikeButton}) no-repeat center center;`} 
  background-size: cover;
  &:hover{{
    cursor: pointer
  }}
  &:active{{
    transform: translate(2px, 2px)
  }}
  `;

const Crawl = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 80%;
  margin-top: 20px;
`;

const Fadeout = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: -webkit-linear-gradient(
    rgba(40, 39, 39, 0) 0%,
    rgba(40, 39, 39, 1) 100%
  );
`;

const FilmCard = (props) => {
  const {
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    movieImage,
    favorite,
  } = props.film;

  const { favoriteToggle } = props;

  // clicking on card takes user to film page

  return (
    <Card>
      <h4>{title}</h4>
      <div>Release Date: {release_date}</div>
      <div>Episode: {episode_id}</div>
      <div>Director: {director}</div>
      <div>Producer: {producer}</div>
      <Crawl>
        {opening_crawl}
        <Fadeout></Fadeout>
      </Crawl>
      <div>{movieImage}</div>
      <Button favorite={favorite} id={episode_id} onClick={favoriteToggle} />
    </Card>
  );
};

export default FilmCard;
