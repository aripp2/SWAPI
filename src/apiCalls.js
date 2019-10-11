
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
};

export const fetchCharacters = charactersUrls => {
  const firstTen = charactersUrls.slice(0, 10);
  const promises = firstTen.map(character => {
    return fetch(character)
      .then(res => res.json())
      .then(data => {
        const { name, homeworld, species, films } = data;
        let speciesType = getSpecies(species).then(type => type);
        let homeworldName = getHomeworldName(homeworld).then(worldName => worldName);
        let population = getHomeworldPop(homeworld).then(pop => pop);
        let movies = getFilms(films).then(titles => titles);

        const characterData = Promise.all([speciesType, homeworldName, population, movies])
          .then(data => ({ 
            name, 
            speciesType: data[0], 
            homeworldName: data[1], 
            population: data[2], 
            movies: data[3]}));
          
          return (characterData)
      });
  });
  return Promise.all(promises);
};

const getHomeworldName = homeworldUrl => {
  return fetch(homeworldUrl)
    .then(res => res.json())
    .then(homeworldInfo => homeworldInfo.name);
};

const getHomeworldPop = homeworldUrl => {
  return fetch(homeworldUrl)
    .then(res => res.json())
    .then(homeworldInfo => homeworldInfo.population);
}; 

const getSpecies = speciesUrl => {
  return fetch(speciesUrl)
    .then(res => res.json())
    .then(species => species.name);
};

const getFilms = (filmsUrls) => {
  const filmsInfo = filmsUrls.map(film => {
    return getTitle(film)
      .then(filmTitle => filmTitle);
  })
  return Promise.all(filmsInfo);
}

const getTitle = (filmUrl) => {
  return fetch(filmUrl)
    .then(response => response.json())
    .then(film => film.title);
}


