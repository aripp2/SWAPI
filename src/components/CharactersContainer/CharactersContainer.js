import React from 'react';
import PropTypes from 'prop-types';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharactersContainer = ({ characters, movieInfo, updateFavs, isLoading }) => {

  const characterInfo = characters.map((character) => {
    return <CharacterCard 
            key={character.name} 
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
        {!movieInfo && 
          <header>
            <h2 className="favs-header">Your Favorite Characters</h2>
          </header>}
        {movieInfo && <header className='scroll'>  
          <h2 className="title">{movieInfo.title}</h2>
          <div className="galaxy">
            <h3 className="away">A long time ago in a galaxy far, far away...
            </h3>
            <p>{movieInfo.opening_crawl}</p>
          </div>
        </header>}
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


