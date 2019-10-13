import React from 'react';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharactersContainer = ({ characters, movieInfo, updateFavs }) => {
  //user movieInfo.opening_crawl to get text when we know where and how to use it

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
      <section>
        {characterInfo}
      </section>
    )
}

export default CharactersContainer;

