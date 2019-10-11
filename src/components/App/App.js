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
      movies: [],
      user: {},
      selectedCharacters: []
    }
  }

  componentDidMount() {
    getMovies()
      .then(allFilms => this.setState({ movies: allFilms }))
    }

  submitUser = (user) => {
    this.setState({user})
  }
  
  getCharacters = (charactersUrls) => {
    fetchCharacters(charactersUrls)
      .then(data => this.setState({ selectedCharacters: data}))
  }

  render() {
    // console.log(this.state.user)
    console.log('app state', this.state.selectedCharacters)
    return (
      <div>
        <UserForm 
        user={this.state.user}
        submitUser={this.submitUser} />
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
