import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard'

describe('CharacterCard', () => {
  it('should match snapshot', () => {
    const wrapper = <CharacterCard /> 
    expect(wrapper).toMatchSnapshot(); 
  })
})