
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

export const fetchCharacters = characters => {
  const firstTen = characters.slice(0, 10);
  const promises = firstTen.map(character => {
  
    return fetch(character)
      .then(res => res.json())
      .then(data => ({
        name: data.name,
        homeWorld: getHomeWorld(data.homeWorld),
        species: getSpecies(data.species[0])
      }));
  });
  return Promise.all(promises);
};

const getHomeWorld = url => {
  return fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .then(homeWorld => homeWorld);
};

const getSpecies = url => {
  return fetch(url)
    .then(res => res.json())
    .then(data => ({
      species: data.species
    }));
};


