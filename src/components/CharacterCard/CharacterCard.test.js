import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard'

describe('CharacterCard', () => {


  it('should match snapshot', () => {
    
    const wrapper = shallow(<CharacterCard
      key={'C-3PO'}
      id={1}
      name={'C-3PO'}
      homeworld={'Tatooine'}
      population={200000}
      species={'Droid'}
      films={['The Empire Strikes Back',
            'Attack of the Clones',
            'The Phantom Menace',
            'Revenge of the Sith',
            'Return of the Jedi',
            'A New Hope'
          ]}
      updateFavs={jest.fn()}
    /> )

    expect(wrapper).toMatchSnapshot(); 
  })
})