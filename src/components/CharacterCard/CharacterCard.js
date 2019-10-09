import React from 'react';
import './CharacterCard.scss';

//need to see how we can dynamically append the realted films array to list items for each character

//We can add an svg for the favorite button

const CharacterCard = () => {
  return (
      <div>
        <h3>Character Name</h3>
        <h4>Homeworld: </h4>
        <h4>Population of Homeworld: </h4>
        <h4>Species: </h4>
        <h4>Related Films: </h4>
          <ul>
            <li>Film</li>
          </ul>
        <button>Favorite</button>
      </div>
    )
}

export default CharacterCard;