import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'; 
import App from './App';


describe('App', () => {
  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should change state based on an event', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm
      submitUser={mockFunction}
    />)
    const mockData = {
        user: {
          name: 'Amy',
          quote: 'Star What?',
          knowledgeLevel: 'Jedi'
        } , 
      haveUser: true
    }

    wrapper.instance().hand(mockEvent)
    expect(wrapper.state('quote')).toEqual()
  })


}); 


