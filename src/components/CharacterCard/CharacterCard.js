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
        <h4 className="CharacterCard_homeWorld">Homeworld: {homeworld}</h4>
        <h4 className="CharacterCard_population">Population: {population}</h4>
        <h4 className="CharacterCard_species">Species: {species}</h4>
        <h4 className="CharacterCard_films" >Related Films: </h4>
          <ul className="CharacterCard_films-ul">
            {filmsList}
          </ul>
        <button
          onClick={() => updateFavs(character)}
        ><img src="" alt="" />Favorite</button>
      </div>
    );
};

export default CharacterCard;

CharacterCard.propTypes = { 
  name: PropTypes.string.isRequired, 
  homeworld: PropTypes.string.isRequired, 
  population: PropTypes.any.isRequired, 
  species: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  updateFavs: PropTypes.func.isRequired
};
