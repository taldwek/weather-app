import styled from "styled-components";
import likeButton from "../assets/images/like-button.png";
import unlikeButton from "../assets/images/unlike-button.svg";

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  border: 4px solid yellow;
  height: 300px;
  width: 90%;
  padding: 0 20px;
`;

const Button = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  margin: 12px;
  top: 0;
  right: 0;
  background: url(${likeButton}) no-repeat center center;
  background-size: cover ;
  `

const FilmCard = (props) => {
  const {
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    backgroundImage,
  } = props.film;

  const { favoriteToggle } = props



  // add favourite star that changes state of favourite attribute in app
  // add background image
  // clicking on card takes user to film page
  // add an on hover that show the opening_crawl crawling

  return (
    <Card>
      <h3>{title}</h3>
      <div>Release Date: {release_date}</div>
      <div>Episode: {episode_id}</div>
      <div>Director: {director}</div>
      <div>Producer: {producer}</div>
      {/* <div>{opening_crawl}</div> */}
      <Button id={episode_id} onClick={favoriteToggle} />
    </Card>
  );
};

export default FilmCard;
