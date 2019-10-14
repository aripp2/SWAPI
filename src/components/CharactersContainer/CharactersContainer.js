import React from 'react';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharactersContainer = ({ characters, movieInfo, updateFavs }) => {
  
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
  })

  return (
      <section className='character-container container'>
        <header className='scroll'>  
          <div className="logo">
            <img src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png/revision/latest?cb=20141129122237" alt='space background'/>
          </div>
          <div className="fall">
            <div className="away">A long time ago in a galaxy far, far away...
            </div>
            <p>{movieInfo.opening_crawl}</p>
          </div>
        </header>
        {characterInfo}
      </section>
    )
}

export default CharactersContainer;

