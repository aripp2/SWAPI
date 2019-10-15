
export const getMovies = () => {
  return fetch('https://swapi.co/api/films/')
    .then(res => {
      if(!res.ok) {
        throw Error('Error getting your movies. Try again later.')
      }
      return res.json()})
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
        const speciesType = getSpecies(species).then(type => type);
        const homeworldInfo = getHomeworldInfo(homeworld).then(info => info);
        const movies = getFilms(films).then(titles => titles);

        const characterData = Promise.all([speciesType, homeworldInfo, movies])
          .then(data => ({ 
            name, 
            species: data[0],
            homeworld: data[1].name,
            population: data[1].population,
            films: data[2]}));

          return (characterData);
      });
  });
  return Promise.all(promises);
};

const getHomeworldInfo = homeworldUrl => {
  return fetch(homeworldUrl)
    .then(res => res.json())
    .then(info => {
      const { name, population} = info;
      return({name, population});
    })
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
};

const getTitle = (filmUrl) => {
  return fetch(filmUrl)
    .then(response => response.json())
    .then(film => film.title);
};


