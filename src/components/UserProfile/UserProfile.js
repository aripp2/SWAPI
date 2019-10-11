import React from 'react';
import './UserProfile.scss';
import { NavLink } from 'react-router-dom';

const UserProfile = ({ name, quote, knowledgeLevel, favorites }) => {

  // once we have profile only showing after form is submitted the below variable will work and we can add {favNum} in the favorites button

  // const favNum = favorites.length;
  
  return (
      <header>
        <h2>{name}</h2>
        <h4>{quote}</h4>
        <h4>{knowledgeLevel}</h4>
        <button>Favorites</button>
        <NavLink  to='/'>Sign Out</NavLink>
      </header>
    )
}

export default UserProfile;