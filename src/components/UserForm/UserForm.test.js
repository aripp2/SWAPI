import React from 'react'; 
import { shallow } from 'enzyme';
import UserForm from './UserForm';

describe('UserForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<UserForm 
      user={
        ({ name: 'kate',
        quote: 'hello', 
        knowledgeLevel: 'Star What?'
      })} 
      submitUser={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot(); 
  })
})