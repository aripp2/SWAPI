import React from 'react';
import './MovieCard.scss';

//should this be a class component so we can hold on to the charaters property as part of it's state and be able to fetch that data that is only specific to the movie card?

const MovieCard = ({ id, title, date, characters, getCharacters }) => {
  return (
      <div className="movie-card">
        <h3 className="episode" >Episode {id}</h3>
        <h4>{title}</h4>
        <h5>Released in {date}</h5>
        <button
          onClick={() => getCharacters(characters)}
        >View Characters</button>
      </div>
    )
}

export default MovieCard;