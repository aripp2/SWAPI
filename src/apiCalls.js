
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
        const { name, homeworld, species, films } = data
        const speciesType = getSpecies(species).then(type => type)
        const homeworldName = getHomeworldName(homeworld).then(worldName => worldName)
        const population = getHomeworldPop(homeworld).then(pop => pop)
        const movies = getFilms(films).then(titles => titles)

        console.log('log', {
          name,
          homeworldName,
          population,
          speciesType,
          movies
        })
 
          return {
            name,
            homeworldName,
            population,
            speciesType,
            movies
          }
      });
  });
  console.log('promises', promises)
  return Promise.all(promises);
};

const getHomeworldName = homeworldUrl => {
  return fetch(homeworldUrl)
    .then(res => res.json())
    // .then(data => console.log('home name', data.name))
    .then(homeworldInfo => homeworldInfo.name)
    // {
    //   const { name, population } = homeworldInfo;
    //   console.log({ name, population })
    //   return ({ name, population });
    // })
};

const getHomeworldPop = homeworldUrl => {
  return fetch(homeworldUrl)
    .then(res => res.json())
    // .then(data => console.log('pop', data.population))
    .then(homeworldInfo => homeworldInfo.population)
}; 

const getSpecies = speciesUrl => {
  return fetch(speciesUrl)
    .then(res => res.json())
    // .then(data => console.log('species', data.name))
    .then(species => species.name);
};

const getFilms = (filmsUrls) => {
  const filmsInfo = filmsUrls.map(film => {
    return getTitle(film)
      .then(filmTitle => filmTitle)
  })
  return Promise.all(filmsInfo)
}

const getTitle = (filmUrl) => {
  return fetch(filmUrl)
    .then(response => response.json())
    // .then(data => console.log(data.title))
    .then(film => film.title)
}


