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
  
  it('should set state', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm 
      submitUser={mockFunction}
    />)
    wrapper.instance().handleChange = jest.fn()
    wrapper.find('input').at(0).simulate('change')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })

  it('should set state for textarea', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm 
      submitUser={mockFunction}
    />)
    wrapper.instance().handleChange = jest.fn()
    wrapper.find('textarea').simulate('change')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
    })

  it('should set state for radio button at index 1', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm 
      submitUser={mockFunction}
    />)
    wrapper.instance().handleChange = jest.fn()
    wrapper.find('input').at(1).simulate('change')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })


  it('should set state for radio button at index 1', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm 
      submitUser={mockFunction}
    />)
    wrapper.instance().handleChange = jest.fn()
    wrapper.find('input').at(2).simulate('change')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })


  it('should set state for radio button at index 1', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm 
      submitUser={mockFunction}
    />)
    wrapper.instance().handleChange = jest.fn()
    wrapper.find('input').at(3).simulate('change')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })

  it('should change state based on an event', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm 
      submitUser={mockFunction}
    />)
    const mockEvent = {
      target: {
        name: 'name', value: 'Kate' 
      } 
    }

    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('name')).toEqual('Kate')
  })

    it('should change state based on an event', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm 
      submitUser={mockFunction}
    />)
    const mockEvent = {
      target: {
        name: 'quote', value: 'pants' 
      } 
    }

    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('quote')).toEqual('pants')
  })

    it('should change state based on an event', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm 
      submitUser={mockFunction}
    />)
    const mockEvent = {
      target: {
        name: 'knowledgeLevel', value: 'one' 
      } 
    }

    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('knowledgeLevel')).toEqual('one')
  })

  it('should call submit user when handleFormSubmit is called', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<UserForm 
      submitUser={mockFunction}
    />)

    wrapper.instance().handleFormSubmit()
    expect(mockFunction).toHaveBeenCalled()
    
  })

})