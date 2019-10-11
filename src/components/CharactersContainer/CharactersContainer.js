import React from 'react';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';

//This container will need to have access to the id and movie scroll text it was clicked from, I have a few thoughts we can discuss

const CharactersContainer = ({ characters }) => {
  const characterInfo = characters.map(character => {
    return <CharacterCard 
            key={character.name}
            name={character.name}
            homeworld={character.homeworld}
            population={character.population}
            species={character.species}
            films={character.films}   
          />
  })

  return (
      <section>
        {characterInfo}
      </section>
    )
}

export default CharactersContainer;