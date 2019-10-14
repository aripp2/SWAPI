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
      user: {},
      movies: [],
      selectedCharacters: [],
      favorites: [],
      haveUser: false,
      isLoading: true,
      error: ''
    }
  }

  componentDidMount() {
    getMovies()
      .then(allFilms => this.setState({ movies: allFilms, isLoading: false }))
      .catch(error => this.setState({ error: 'Something is wrong in the universe'}))
    }

  submitUser = (user) => {
    this.setState({user, haveUser: true })
  }
  
  getCharacters = (charactersUrls) => {
    fetchCharacters(charactersUrls)
      .then(data => this.setState({ selectedCharacters: data, isLoading: false }))
      .catch(error => this.setState({ error: 'Something is wrong in the universe'}))
  }

  addFavorite = (character) => {
    const { favorites } = this.state
    const updatedFavs = [...favorites, character]
      this.setState({ favorites: updatedFavs })
  }

  removeFavorite = (character) => {
    const { favorites } = this.state
    const updatedFavs = favorites.filter(fav => fav.name !== character.name)
    this.setState({ favorites: updatedFavs })
  }

  updateFavs = (character) => {
    const { favorites } = this.state
    const names = favorites.map(fav => fav.name)
     names.includes(character.name) ? this.removeFavorite(character) : this.addFavorite(character)
  }

  render() {
    const { user, movies, selectedCharacters, favorites, haveUser, isLoading, error } = this.state;
    
    return (
      <div>
        <Route exact path='/' render={() => <UserForm
          user={user}
          submitUser={this.submitUser} /> } />
        <main>
          {haveUser && <UserProfile {...user} favorites={favorites}/>}
          {isLoading && <h2>Loading...</h2>}
          {error && <h2>error</h2>}
          <Route exact path='/movies' render={() => <MoviesContainer movies={movies} getCharacters={this.getCharacters} /> } />
          <Route exact path='/movies/:id' render={({ match }) => {
            const selectedMovie = movies.find(movie => movie.episode_id === parseInt(match.params.id))
            return (
            <CharactersContainer 
              characters={selectedCharacters}
              updateFavs={this.updateFavs} 
              movieInfo={selectedMovie} />)}} />
            <Route exact path='/favorites' render={() => <CharactersContainer 
              characters={favorites}
              updateFavs={this.updateFavs}
              movieInfo={movies[0]}  />} />
        </main> 
      </div>
    )
  }
}

export default App;
