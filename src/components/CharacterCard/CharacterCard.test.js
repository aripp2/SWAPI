import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard'

describe('CharacterCard', () => {

  it('should match snapshot', () => {
    const wrapper = <CharacterCard characters={ [
        {
          films: [
            'The Empire Strikes Back',
            'Attack of the Clones',
            'The Phantom Menace',
            'Revenge of the Sith',
            'Return of the Jedi',
            'A New Hope'
          ],
          homeworld: 'Tatooine',
          name: 'C-3PO',
          population: '200000',
          species: 'Droid'
        },
        {
          films: [
            'The Empire Strikes Back',
            'Attack of the Clones',
            'The Phantom Menace',
            'Revenge of the Sith',
            'Return of the Jedi',
            'A New Hope',
            'The Force Awakens'
          ],
          homeworld: 'Naboo',
          name: 'R2-D2',
          population: '4500000000',
          pecies: 'Droid'
        }
      ]} /> 

    expect(wrapper).toMatchSnapshot(); 
  })

    // it('should return an li of the ', () => {
    //   const expected = "The Phantom Menace"
    //   const mockFunction= jest.fn()
    //   const wrapper = <CharacterCard characters={[{ name: "C-3PO", species: "Droid", homeworld: "Tatooine", population: "200000", films: ["The Phantom Menace"]}] }/>
        
    //   expect(mockFunction()).toEqual(expected)
    //   })

})

