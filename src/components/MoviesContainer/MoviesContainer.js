import React from 'react';
import PropTypes from 'prop-types';
import './MoviesContainer.scss';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ movies, getCharacters }) => {
  let sortedMovies = movies.sort((a, b) => a.episode_id - b.episode_id);

  const allMovies = sortedMovies.map((movie, i) => {
    return <MovieCard
      key={i}
      id={movie.episode_id}
      title={movie.title}
      date={movie.release_date}
      characters={movie.characters}
      getCharacters={getCharacters}
      />
    });

  return (
      <section className="MovieContainer">
        { allMovies }
      </section>
    );
};

export default MoviesContainer;

MoviesContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  getCharacters: PropTypes.func.isRequired
};