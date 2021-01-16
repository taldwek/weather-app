import { useState, useEffect } from 'react'
import FilmCard from './FilmCard'

const App = () => {

  const [filmList, setFilmList] = useState('')

  const filmFetcher = async () => {
    try {
      const response = await (await (fetch('https://swapi.dev/api/films/'))).json()
      const filmsArray = response.results.map(film => {
        return {
          title: film.title,
          episodeId: film.episode_id,
          description: film.opening_crawl,
          director: film.director,
          producer: film.producer,
          releaseDate: film.release_date,
          favourite: false,
          backgroundImage: 'to be added'
        }
      })
      window.localStorage.setItem('filmsArray', JSON.stringify(filmsArray))
      setFilmList(filmsArray)
    } catch (error) {
      console.log(error)
      // show message on page - website is under maintenace, please come back later!
    }
  }
 
  useEffect(() => {
    try {
      const filmsArray = window.localStorage.getItem('filmsArray')
      filmsArray ? setFilmList(JSON.parse(filmsArray)) : filmFetcher()
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log(filmList)


    return (
    <div>
    { filmList && filmList.map(film => <FilmCard film={film} />)
    }  
    </div>
  );
}

export default App;
