import SWAPI_URL from '../consts'

const getFilmList = async () => {
    try {
      const response = await (await (fetch(SWAPI_URL))).json()
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
      return filmsArray
    } catch (error) {
      console.log(error)
      // show message on page - website is under maintenace, please come back later!
    }
  }

  export default getFilmList