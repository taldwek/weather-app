const FilmCard = (props) => {

    const  { film } = props 
    console.log(film)
    return (
      <div className='film-card'>
      <div>{film.title}</div>
      <div>{film.releaseDate}</div>
      <div>{film.producer}</div>
      <div>{film.director}</div>
      <div>{film.epidosdeId}</div>
      <div>{film.description}</div>
      </div>
    );
  }
  
  export default FilmCard;