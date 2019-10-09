import React from 'react';
import './MoviesContainer.scss';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ movies }) => {
  let sortedMovies = movies.sort((a, b) => a.episode_id - b.episode_id)
 
  const allMovies = sortedMovies.map(movie => {
    return <MovieCard 
      key={movie.episode_id}
      id={movie.episode_id}
      title={movie.title}
      date={movie.release_date}
    />
  })
  return (
      <section>
        { allMovies }
      </section>
    )
}

export default MoviesContainer;