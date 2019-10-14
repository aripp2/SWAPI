import React from 'react';
import './UserProfile.scss';
import { NavLink } from 'react-router-dom';

const UserProfile = ({ name, quote, knowledgeLevel, favorites }) => {

  const favNum = favorites.length;

  return (
      <aside>
        <h1>Star Wars Trivia</h1>
        <h2>{name}</h2>
        <h4>Favorite Quote: {quote}</h4>
        <h4>Knowled Level: {knowledgeLevel}</h4>
        <NavLink to='/favorites'><button>Favorites {favNum}</button></NavLink>
        <NavLink  to='/'>Sign Out</NavLink>
        <NavLink  to='/movies'>Back to All Movies</NavLink>
      </aside>
    )
}

export default UserProfile;