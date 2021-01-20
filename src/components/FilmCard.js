import React from "react";
import styled from "styled-components";
import unlikeButton from "../assets/images/solid-star.svg";
import likeButton from "../assets/images/regular-star.svg";


const CardContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  height: 350px;
  padding: 0 20px;
  background: #282727;
  margin-left: 40px;
  border-radius: 5px 0px 0px 5px;
  opacity: 0.8;
`;

const FavoriteButton = styled.div`
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
  background: linear-gradient(rgba(40, 39, 39, 0) 0%, rgba(40, 39, 39, 1) 100%);
  `;
  
  const FilmCard = (props) => {
    const {
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
      favorite,
      imgUrl
    } = props.film;
    
    const { favoriteToggle } = props;
    
    const Card = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
    justify-content: center;
    margin-bottom: inherit;
    margin-top: inherit;
    `;

    const Img = styled.img.attrs({
      src: imgUrl,
    })`
      width: 80%;
      height: 350px;
    `;
  
    
    console.log(imgUrl)
    
    
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
      <Img />
    </Card>
  );
};

export default FilmCard;
