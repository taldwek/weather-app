import styled from "styled-components";
import likeButton from "../assets/images/like-button.png";
import unlikeButton from "../assets/images/unlike-button.svg";

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 4px solid yellow;
  margin: 50px;
  height: 300px;
  width: 400px;
`;

const Button = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  margin: 4px;
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
    favourite,
    backgroundImage,
  } = props.film;

  // add favourite star that changes state of favourite attribute in app
  // add background image
  // clicking on card takes user to film page
  // add an on hover that show the opening_crawl crawling

  return (
    <Card>
      <div>Title: {title}</div>
      <div>Release Date: {release_date}</div>
      <div>Producer: {producer}</div>
      <div>director: {director}</div>
      <div>Episode ID:{episode_id}</div>
      {/* <div>{opening_crawl}</div> */}
      <Button />
    </Card>
  );
};

export default FilmCard;
