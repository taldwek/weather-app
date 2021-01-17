import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid yellow;
  margin: 40px;
  height: 400px;
  width: 400px;
`;

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

  return (
    <Card>
      <div>{title}</div>
      <div>{release_date}</div>
      <div>{producer}</div>
      <div>{director}</div>
      <div>{episode_id}</div>
      {/* <div>{opening_crawl}</div> */}
      <button>Favoruite Star</button>
    </Card>
  );
};

export default FilmCard;
