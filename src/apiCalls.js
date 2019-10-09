// export const getMovies = () => {



// }


fetch('https://swapi.co/api/films/3/')
  .then(response => response.json())
  .then(movieCharacters => {
const { characters } = movieCharacters;
    const characterNames = getCharacters(characters)
   })