const FilmCard = (props) => {
  const {
    title,
    releaseDate,
    producer,
    director,
    epidosdeId,
    description,
  } = props.film;

  // add favourite star that changes state of favourite attribute in app
  // add background image
  // clicking on card takes user to film page

  return (
    <div className="film-card">
      <div>{title}</div>
      <div>{releaseDate}</div>
      <div>{producer}</div>
      <div>{director}</div>
      <div>{epidosdeId}</div>
      <div>{description}</div>
      <button>Favoruite Star</button>
    </div>
  );
};

export default FilmCard;
