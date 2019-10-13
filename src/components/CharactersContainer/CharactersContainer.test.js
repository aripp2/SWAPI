import React from 'react'; 
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CharactersContainer from './CharactersContainer';

describe('CharactersContainer', () => {


  it('should match snapshot', () => {
    const wrapper = shallow(<CharactersContainer 
      characters={[{ 
      films: ["The Empire Strikes Back", "Attack of the Clones", "The Phantom Menace", "Revenge of the Sith", "Return of the Jedi", "A New Hope"],
      homeworld: "Tatooine",
      name: "C-3PO",
      population: "200000",
      species: "Droid"
    },
    {
      films: ["The Empire Strikes Back", "Attack of the Clones", "The Phantom Menace", "Revenge of the Sith", "Return of the Jedi", "A New Hope", "The Force Awakens"],
      homeworld: "Naboo",
      name: "R2-D2",
      population: "4500000000",
      pecies: "Droid"
    }]} /> )
    expect(wrapper).toMatchSnapshot();
  });
})