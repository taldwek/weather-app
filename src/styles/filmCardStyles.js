import styled from "styled-components";
import unlikeButton from "../assets/images/favoriteIcons/solid-star.svg";
import likeButton from "../assets/images/favoriteIcons/regular-star.svg";

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

const Card = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  justify-content: center;
  margin-bottom: inherit;
  margin-top: inherit;
`;

const Fadeout = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(rgba(40, 39, 39, 0) 0%, rgba(40, 39, 39, 1) 100%);
`;

const imgStyle = {
  position: "relative",
  left: "0.1px",
  borderLeft: "2.5px solid #9c8721",
  width: "90%",
  height: "350px",
  borderRadius: "0px 5px 5px 0px",
};

export { imgStyle, Fadeout, Card, Crawl, CardContent, FavoriteButton };
