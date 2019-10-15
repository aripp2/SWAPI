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
            <header className="favs-header">
              <h2>Your Favorite Characters</h2>
            </header>}

        {characters.length === 0 && !movieInfo && <p className="favs-prompt">Looks like you do not have any favorites yet. Head back to Movies and view their character to add some favorite charaters here!</p>}
    
        {movieInfo && <header className='scroll'>  
          <h2 className="title">{movieInfo.title}</h2>
          <div className="galaxy">
            <h3 className="away">A long time ago in a galaxy far, far away...
            </h3>
            <p>{movieInfo.opening_crawl}</p>
          </div>
        </header>}
        {isLoading && <h1>Loading ...</h1>}
        {characterInfo}
      </section>
    );
};

export default CharactersContainer;

CharactersContainer.propTypes = {
  characters: PropTypes.array.isRequired,
  movieInfo: PropTypes.any,
  updateFavs: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};


