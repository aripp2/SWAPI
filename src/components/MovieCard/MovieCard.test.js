import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';

describe('MovieCard',() => { 
  let wrapper;

  beforeEach(() => {
    const mockDate = '05/19/1999'
    const mockGetCharacters = jest.fn();
    wrapper = shallow(<MovieCard onclick={mockGetCharacters} />);
  })

  it('should match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call getCharacters on click', () => {
    const mockGetCharacters = jest.fn()
    const mockData = {
      characters: (34)["https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/11/", "https://swapi.co/api/people/16/", "https://swapi.co/api/people/20/", "https://swapi.co/api/people/21/", "https://swapi.co/api/people/32/", "https://swapi.co/api/people/33/", "https://swapi.co/api/people/34/", "https://swapi.co/api/people/36/", "https://swapi.co/api/people/37/", "https://swapi.co/api/people/38/", "https://swapi.co/api/people/39/", "https://swapi.co/api/people/40/", "https://swapi.co/api/people/41/", "https://swapi.co/api/people/42/", "https://swapi.co/api/people/43/", "https://swapi.co/api/people/44/", "https://swapi.co/api/people/46/", "https://swapi.co/api/people/48/", "https://swapi.co/api/people/49/", "https://swapi.co/api/people/50/", "https://swapi.co/api/people/51/", "https://swapi.co/api/people/52/", "https://swapi.co/api/people/53/", "https://swapi.co/api/people/54/", "https://swapi.co/api/people/55/", "https://swapi.co/api/people/56/", "https://swapi.co/api/people/57/", "https://swapi.co/api/people/58/", "https://swapi.co/api/people/59/", "https://swapi.co/api/people/47/", "https://swapi.co/api/people/35/"],
      episode_id: 1,
      opening_crawl: "Turmoil has engulfed the Galactic Republic.The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debatesthis alarming chain of events,the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
      release_date: "1999-05-19",
      title: "The Phantom Menace",
    }
    const wrapper = shallow(<MovieCard
      key={1}
      id={mockData.episode_id}
      title={mockData.title}
      date={mockDate}
      characters={mockData.characters}
      getCharacters={mockGetCharacters}
    />)
    wrapper.find('button').simulate('click')

    expect(mockGetCharacters).toHaveBeenCalled()

  })
})


