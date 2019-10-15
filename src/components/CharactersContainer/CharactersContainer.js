import React from 'react';
import PropTypes from 'prop-types';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharactersContainer = ({ characters, movieInfo, updateFavs, isLoading }) => {

  const characterInfo = characters.map((character) => {
    return <CharacterCard 
            key={character.name}
            id={movieInfo.episode_id}
            name={character.name}
            homeworld={character.homeworld}
            population={character.population}
            species={character.species}
            films={character.films}
            updateFavs={updateFavs}  
          />
    });

  return (
     
      <section className="characterContainer_section">
        <header className='scroll'>  
          <h2 className="title">{movieInfo.title}</h2>
          <div className="fall">
            <div className="away">A long time ago in a galaxy far, far away...
            </div>
            <p>{movieInfo.opening_crawl}</p>
          </div>
        </header>
        {isLoading && <h2>Loading...</h2>}
        {characterInfo}
      </section>
    );
};

export default CharactersContainer;

CharactersContainer.propTypes = {
  characters: PropTypes.array.isRequired,
  movieInfo: PropTypes.object,
  updateFavs: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};


