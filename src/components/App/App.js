import React, { Component } from 'react';
import './App.scss';
import UserProfile from '../UserProfile/UserProfile';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import UserForm from '../UserForm/UserForm';

import { getMovies } from '../../../src/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    return getMovies()
  }

  render() {
    return (
      <div>
        <UserForm />
        <UserProfile />
        <main>
          <h1>SWAPI</h1>
          <MoviesContainer />
          <CharactersContainer />
          <FavoritesContainer />
        </main> 
      </div>
      )
  }
}



export default App;
