import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, date, characters, getCharacters }) => {
  return (
      <div className="movie_card">
        <div className="movie_card-style">
          <h3 className="episode" >Episode {id}</h3>
          <h4 className="movie_card-title">{title}</h4>
          <h5>Released in {date}</h5>
        <Link to={`/movies/${id}`}><button className="movie_card-btn"
        onClick={() => getCharacters(characters, id)}>View Characters
        </button></Link>
        </div>
      </div>
    )
}

export default MovieCard;