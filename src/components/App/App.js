import React, { Component } from 'react';
import './App.scss';
import UserProfile from '../UserProfile/UserProfile';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import UserForm from '../UserForm/UserForm';
import { getMovies, fetchCharacters } from '../../apiCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        quote: '', 
        level: '',
        favorites: []
      },
      movies: []
    }
  }

  componentDidMount() {
    getMovies()
      .then(allFilms => this.setState({ movies: allFilms }))
    }
  
  getCharacters(characters) {
    fetchCharacters(characters)
      .then(data => console.log("made it to app", data))
  }

  render() {
    console.log(this.state.movies)
    return (
      <div>
        <UserForm user={this.state.user}/>
        <UserProfile />
        <main>
          <h1>STAR WARS</h1>
          <MoviesContainer movies={this.state.movies} getCharacters={this.getCharacters}/>
          <CharactersContainer />
          <FavoritesContainer />
        </main> 
      </div>
      )
  }
}



export default App;



