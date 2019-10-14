import React from 'react';
import './CharacterCard.scss';

// we can not append the films yet, since by default there is no value it breaks since it can't map. Once we have our routes set up that will take care of the "conditional rendering so that we can use the map to append the films as <li>'s"

const CharacterCard = ({ name, homeworld, population, species, films, updateFavs }) => {
  const character = { name, homeworld, population, species, films }
  const filmsList = films.map((film, i) => {
    return <li key={i}>{film}</li>
  })
  return (
      <div className="CharacterCard">
        <h3 className="CharacterCard_name">{name}</h3>
        <h4 className="CharacterCard_homeWorld">Homeworld: {homeworld}</h4>
        <h4 className="CharacterCard_population">{homeworld}'s population{population}</h4>
        <h4 className="CharacterCard_species">Species: {species}</h4>
        <h4 className="CharacterCard_films" >Related Films: </h4>
          <ul className="CharacterCard_films-ul">
            {filmsList}
          </ul>
        <button
          onClick={() => updateFavs(character)}
        ><img src="" alt="" />Favorite</button>
      </div>
    )
}

export default CharacterCard;

