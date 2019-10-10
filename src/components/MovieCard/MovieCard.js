import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ id, title, date }) => {
  return (
      <div className="movie-card">
        <div className="movie-card-style">
          <h3 className="episode" >Episode {id}</h3>
          <h4 className="movie-card=title">{title}</h4>
          <h5>Released in {date}</h5>
          <button className="movie-card-btn">View Characters</button>
        </div>
      </div>
    )
}

export default MovieCard;