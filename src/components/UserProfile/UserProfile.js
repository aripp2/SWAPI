import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './UserProfile.scss';

const UserProfile = ({ name, quote, knowledgeLevel, favorites }) => {

  const favNum = favorites.length;

  return (
      <aside className="profile">
        <h2>Star Wars Trivia</h2>
        <h3>Hi {name}!</h3>
        <h4>Favorite Quote:</h4>
        <h5>"{quote}"</h5>
        <h4>Knowledge Level:</h4>
        <h5>{knowledgeLevel}</h5>
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