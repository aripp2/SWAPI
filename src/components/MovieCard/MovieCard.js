import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ id, title, date }) => {
  return (
      <div className="movie-card">
        <h3 className="episode" >Episode {id}</h3>
        <h4>{title}</h4>
        <h5>Released in {date}</h5>
        <button

        >View Characters</button>
      </div>
    )
}

export default MovieCard;