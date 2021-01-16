import { useState, useEffect } from 'react'
import FilmCard from './components/FilmCard'
import getFilmList from './utils/utils'

const App = () => {

  const [filmList, setFilmList] = useState([])
 
  useEffect(() => {
    try {
      const filmsArray = window.localStorage.getItem('filmsArray')
      filmsArray.length ? setFilmList(JSON.parse(filmsArray)) : setFilmList(getFilmList())
    } catch (error) {
      console.log(error)
    }
  }, [])

    return (
    <div>
    { filmList.length && filmList.map(film => <FilmCard key={film.episodeId} film={film} />)
    }  
    </div>
  );
}

export default App;
