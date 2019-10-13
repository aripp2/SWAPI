import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';
//should this be a class component so we can hold on to the charaters property as part of it's state and be able to fetch that data that is only specific to the movie card?

const MovieCard = ({ id, title, date, characters, getCharacters }) => {
  console.log("characters", characters)
  return (
      <div className="movie_card">
        <div className="movie_card-style">
          <h3 className="episode" >Episode {id}</h3>
          <h4 className="movie_card-title">{title}</h4>
          <h5>Released in {date}</h5>
        <Link to='/characters'><button className="movie_card-btn"
        onClick={() => getCharacters(characters)}>View Characters
        </button></Link>
        </div>
      </div>
    )
}

export default MovieCard;