import React from 'react'; 
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CharactersContainer from './CharactersContainer';

describe('CharactersContainer', () => {


  it('should match snapshot', () => {
    const wrapper = shallow(<CharactersContainer 
      movieInfo={[{
        characters:["https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/11/", "https://swapi.co/api/people/16/", "https://swapi.co/api/people/20/", "https://swapi.co/api/people/21/", "https://swapi.co/api/people/32/", "https://swapi.co/api/people/33/", "https://swapi.co/api/people/34/", "https://swapi.co/api/people/36/", "https://swapi.co/api/people/37/", "https://swapi.co/api/people/38/", "https://swapi.co/api/people/39/", "https://swapi.co/api/people/40/", "https://swapi.co/api/people/41/", "https://swapi.co/api/people/42/", "https://swapi.co/api/people/43/", "https://swapi.co/api/people/44/", "https://swapi.co/api/people/46/", "https://swapi.co/api/people/48/", "https://swapi.co/api/people/49/", "https://swapi.co/api/people/50/", "https://swapi.co/api/people/51/", "https://swapi.co/api/people/52/", "https://swapi.co/api/people/53/", "https://swapi.co/api/people/54/", "https://swapi.co/api/people/55/", "https://swapi.co/api/people/56/", "https://swapi.co/api/people/57/", "https://swapi.co/api/people/58/", "https://swapi.co/api/people/59/", "https://swapi.co/api/people/47/", "https://swapi.co/api/people/35/"],
        episode_id: 1,
        opening_crawl: "Turmoil has engulfed the Galactic Republic.The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debatesthis alarming chain of events,the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
        release_date: "1999-05-19",
        title: "The Phantom Menace"
      }]}
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
      species: "Droid"
    }]} /> )
    expect(wrapper).toMatchSnapshot();
  });
})
