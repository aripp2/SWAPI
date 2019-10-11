import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import UserProfile from '../UserProfile/UserProfile';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import UserForm from '../UserForm/UserForm';
import { getMovies, fetchCharacters } from '../../apiCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      user: {},
      selectedCharacters: [],
      selctedMovie: {}
    }
  }

  componentDidMount() {
    getMovies()
      .then(allFilms => this.setState({ movies: allFilms }))
    }

  submitUser = (user) => {
    this.setState({user})
  }
  
  getCharacters = (charactersUrls, id) => {
    this.setState({ selctedMovie: this.state.movies.find(movie => movie.episode_id === id)})
    fetchCharacters(charactersUrls)
      .then(data => this.setState({ selectedCharacters: data}))
  }

  render() {
    console.log('user', this.state.user)
    console.log('selected movie', this.state.selctedMovie)
    // console.log('app state', this.state.selectedCharacters)
    return (
      <div>
        <Route exact path='/' render={() => <UserForm
          user={this.state.user}
          submitUser={this.submitUser} /> } />
        <main>
          <h1>STAR WARS</h1>
          <UserProfile {...this.state.user}/>
          <Route exact path='/movies' render={() => <MoviesContainer movies={this.state.movies} getCharacters={this.getCharacters} /> } />
          <Route exact path='/movies/:id' render={() => <CharactersContainer characters={this.state.selectedCharacters} 
            movieInfo={this.state.selctedMovie} />} />
        </main> 
      </div>
      )
  }
}



export default App;
