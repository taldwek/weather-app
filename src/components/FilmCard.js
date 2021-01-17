import styled from "styled-components";
import unlikeButton from "../assets/images/like-button.png";
import likeButton from "../assets/images/unlike-button.svg";

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
  width: 90%;
  padding: 0 20px;
  background: #415141b0;  

`;

const Button = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  margin: 12px;
  top: 0;
  right: 0;
  background: ${props => props.favorite === false ? `url(${likeButton}) no-repeat center center;` : `url(${unlikeButton}) no-repeat center center;`} 
  background-size: cover;
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
    favorite
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
      <Button favorite={favorite} id={episode_id} onClick={favoriteToggle} />
    </Card>
  );
};

export default FilmCard;
