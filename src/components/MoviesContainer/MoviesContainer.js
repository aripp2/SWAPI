import React from 'react';
import './MoviesContainer.scss';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ movies, getCharacters, isLoading }) => {
  let sortedMovies = movies.sort((a, b) => a.episode_id - b.episode_id)

  const allMovies = sortedMovies.map((movie, i) => {
    return <MovieCard
      key={i}
      id={movie.episode_id}
      title={movie.title}
      date={movie.release_date}
      characters={movie.characters}
      getCharacters={getCharacters}
      />
    })

  return (
      <section className="MovieContainer">
        {isLoading && <img src="https://miro.medium.com/max/1600/1*jfvE2OewojuD1gzO_RFC7A.gif" alt=""/> }
        { allMovies }
      </section>
    )
}

export default MoviesContainer;

