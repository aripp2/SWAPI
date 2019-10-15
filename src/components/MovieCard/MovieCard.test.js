import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';

describe('MovieCard',() => { 
  let wrapper;
  const mockCharacters = ["https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/10/"]

  beforeEach(() => {
    const mockGetCharacters = jest.fn();
    wrapper = shallow(<MovieCard 
      key={1}
      id={1}
      title={"The Phantom Menace"}
      date={"1999-05-19"}
      characters={mockCharacters}
      getCharacters={mockGetCharacters} />);
  })

  it('should match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call getCharacters on click', () => {

    wrapper.find('button').simulate('click')

    expect(mockGetCharacters).toHaveBeenCalled()

  })
})



