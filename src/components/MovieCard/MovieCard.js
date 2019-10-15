import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({ id, title, date, characters, getCharacters }) => {

  const fixedDate = new Date(date + 'T00:00').toString().split(' ').slice(1, 4).join(' ');

  const convert = (num) => {
    if(num < 1) {return '' }
    if (num >= 4){return 'IV' + convert(num - 4)}
    if (num >= 1){return 'I' + convert(num - 1)}
  };

  const roman = convert(id);

  return (
      <div className="movie_card">
        <h3 className="episode">Episode {roman}</h3>
        <h4 className="movie_card-title">{title}</h4>
        <h5>Released on {fixedDate}</h5>
        <Link to={`/movies/${id}`}>
          <button 
            className="movie_card-btn"
            onClick={() => getCharacters(characters)}
          >View Characters</button>
        </Link>
      </div>
    );
};

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired, 
  date: PropTypes.string.isRequired, 
  characters: PropTypes.array.isRequired, 
  getCharacters: PropTypes.func.isRequired
};