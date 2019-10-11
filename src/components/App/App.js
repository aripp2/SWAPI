import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
        <Route exact path='/' render={() => <UserForm
          user={this.state.user}
          submitUser={this.submitUser} /> } />
        <UserProfile user={this.state.user}/>
        <main>
          <h1>STAR WARS</h1>
          <Route exact path='/movies' render={() => <MoviesContainer movies={this.state.movies} getCharacters={this.getCharacters} /> } />
          <Route exact path='/characters' render={() => <CharactersContainer characters={this.state.selectedCharacters} />} />
        </main> 
      </div>
      )
  }
}



export default App;
