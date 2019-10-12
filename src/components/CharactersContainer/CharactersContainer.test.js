import React from 'react'; 
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import CharactersContainer from './CharactersContainer';

describe('CharactersContainer', () => {

  beforeEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharactersContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})