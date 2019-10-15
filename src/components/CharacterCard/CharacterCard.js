import React from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.scss';

const CharacterCard = ({ name, homeworld, population, species, films, updateFavs }) => {
  
  const character = { name, homeworld, population, species, films };

  const filmsList = films.map((film, i) => {
    return <li key={i}>{film}</li>
  });

  return (
      <div className="CharacterCard">
        <h3 className="CharacterCard_name">{name}</h3>
      <h4 className="CharacterCard_homeWorld-title">Homeworld:<span className="CharacterCard_homeWorld">{homeworld}</span></h4>
      <h4 className="CharacterCard_population-title">Population:<span className="CharacterCard_population">{population}</span></h4>
    <h4 className="CharacterCard_species-title">Species:<span className="CharacterCard_species">{species}</span></h4>
        <h4 className="CharacterCard_films">Related Films: </h4>
          <ul className="CharacterCard_films-ul">
            {filmsList}
          </ul>
    <button className="CharacterCard_character-btn"
          onClick={() => updateFavs(character)}
        ><img src="" alt="" />Favorite</button>
      </div>
    );
};

export default CharacterCard;

CharacterCard.propTypes = { 
  name: PropTypes.string.isRequired, 
  homeworld: PropTypes.string.isRequired, 
  population: PropTypes.string.isRequired, 
  species: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  updateFavs: PropTypes.func.isRequired
};
