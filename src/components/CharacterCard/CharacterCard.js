import React from 'react';
import './CharacterCard.scss';

// we can not append the films yet, since by default there is no value it breaks since it can't map. Once we have our routes set up that will take care of the "conditional rendering so that we can use the map to append the films as <li>'s"


const CharacterCard = ({ name, homeworld, population, species, films }) => {
  // const filmsList = films.map(film => {
  //   return <li>film</li>
  // })
  return (
      <div>
        <h3>{name}</h3>
        <h4>Homeworld: {homeworld}</h4>
        <h4>Population of Homeworld: {population}</h4>
        <h4>Species: {species}</h4>
        <h4>Related Films: </h4>
          <ul>
            <li>Films will go here</li>
          </ul>
        <button>Favorite</button>
      </div>
    )
}

export default CharacterCard;