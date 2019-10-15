import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './UserProfile.scss';

const UserProfile = ({ name, quote, knowledgeLevel, favorites }) => {

  const favNum = favorites.length;

  return (
      <aside>
        <h1>Star Wars Trivia</h1>
        <h2>{name}</h2>
        <h4>Favorite Quote: {quote}</h4>
        <h4>Knowledge Level: {knowledgeLevel}</h4>
        <Link to='/favorites'>
          <button>Favorites {favNum}</button>
        </Link>
        <Link to='/'>
          <button>Sign Out</button>
        </Link>
        <Link to='/movies'>
          <button>All Movies</button>
        </Link>
      </aside>
    );
};

export default UserProfile;

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  knowledgeLevel: PropTypes.string.isRequired,
  favorites: PropTypes.array.isRequired,
};