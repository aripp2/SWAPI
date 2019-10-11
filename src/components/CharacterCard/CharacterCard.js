import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({ name, homeworld, population, species, films }) => {
  const filmsList = films.map(film => {
    return <li>{film}</li>
  })
  return (
      <div>
        <h3>{name}</h3>
        <h4>Homeworld: {homeworld}</h4>
        <h4>Population of Homeworld: {population}</h4>
        <h4>Species: {species}</h4>
        <h4>Related Films: </h4>
          <ul>
            {filmsList}
          </ul>
        <button>Favorite</button>
      </div>
    )
}

export default CharacterCard;

