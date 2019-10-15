import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <UserProfile
        name= 'Amy'
        quote= 'No clue'
        knowledgeLevel= 'Star What?'
        favorites= {[]}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  //not sure if we can test the button for the <Link>'s??? 

});