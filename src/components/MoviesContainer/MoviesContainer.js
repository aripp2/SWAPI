import React from 'react';
import './MoviesContainer.scss';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ movies, getCharacters }) => {
  // console.log('movies info', movies)
  let sortedMovies = movies.sort((a, b) => a.episode_id - b.episode_id)
 
  const allMovies = sortedMovies.map(movie => {
    return <MovieCard 
      key={movie.episode_id}
      id={movie.episode_id}
      title={movie.title}
      date={movie.release_date}
      characters={movie.characters}
      getCharacters={getCharacters}
    />
  })
  return (
      <section className="MovieContainer">
        { allMovies }
      </section>
    )
}

export default MoviesContainer;

