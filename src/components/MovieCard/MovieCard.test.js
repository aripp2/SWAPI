import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard'

describe('MovieCard',() => { 
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieCard />)
  })

  it('should match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})