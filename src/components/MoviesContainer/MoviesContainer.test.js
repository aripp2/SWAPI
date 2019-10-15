import React from 'react'; 
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer'

describe('MoviesContainer', () => {

  it('should match Snapshot', () => {
    const wrapper = shallow(
      <MoviesContainer movies={[{
        characters:["https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/11/"],
        episode_id: 1,
        opening_crawl: "Turmoil has engulfed the Galactic Republic.The taxation of trade routes to outlying star systems is in dispute. ",
        release_date: "1999-05-19",
        title: "The Phantom Menace"
      },
      {
        characters:["https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/6/"],
        episode_id: 2,
        opening_crawl: "There is unrest in the Galactic Senate.",
        release_date: "2002-05-16",
        title: "Attack of the Clones"
        }]} 
        getCharacters={jest.fn()} />

    )
    expect(wrapper).toMatchSnapshot();
  })


});