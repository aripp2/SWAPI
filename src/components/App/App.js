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
    console.log('user', this.state.user)
    return (
      <div>
        <Route exact path='/' render={() => <UserForm
          user={this.state.user}
          submitUser={this.submitUser} /> } />
        <main>
          <h1>STAR WARS</h1>
          <UserProfile {...this.state.user}/>
          <Route exact path='/movies' render={() => <MoviesContainer movies={this.state.movies} getCharacters={this.getCharacters} /> } />
          <Route exact path='/movies/:id' render={({ match }) => {
            const selectedMovie = this.state.movies.find(movie => movie.episode_id === parseInt(match.params.id))
            return (
            <CharactersContainer characters={this.state.selectedCharacters} movieInfo={selectedMovie} />)}} />
        </main> 
      </div>
      )
  }
}



export default App;
