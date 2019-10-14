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

  it('should update state when submitUser is called' () => {
    
  })

}); 


