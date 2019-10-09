
export const getMovies = () => {
  return fetch('https://swapi.co/api/films/')
    .then(res => res.json())
    // .then(films => console.log(films))
    .then(films => {
      return films.results.map(film => {
        const { episode_id, title, release_date, opening_crawl, characters } = film;
        return {
          episode_id,
          title,
          release_date,
          opening_crawl,
          characters
        }
     
      })
     
})
}

