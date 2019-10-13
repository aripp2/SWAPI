import React from 'react';
import './UserProfile.scss';
import { NavLink } from 'react-router-dom';

const UserProfile = ({ name, quote, knowledgeLevel, favorites }) => {

  const favNum = favorites.length;

  return (
      <header>
        <h2>{name}</h2>
        <h4>{quote}</h4>
        <h4>{knowledgeLevel}</h4>
        <NavLink to='/favorites'><button>Favorites {favNum}</button></NavLink>
        <NavLink  to='/'>Sign Out</NavLink>
      </header>
    )
}

export default UserProfile;