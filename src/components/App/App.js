import React, { Component } from 'react';
import './App.scss';
import UserProfile from '../UserProfile/UserProfile';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import UserForm from '../UserForm/UserForm';
import { getMovies } from '../../apiCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      user: null

    }
  }

  componentDidMount() {
    getMovies()
      .then(allFilms => this.setState({ movies: allFilms }))
    }

  submitUser = (user) => {
    this.setState({user})
  }
  

  render() {
    console.log(this.state.movies)
    console.log("user", this.state.user)
    return (
      <div>
        <UserForm submitUser={this.submitUser} />
        
        <UserProfile />
        <main>
          <h1>STAR WARS</h1>
          <MoviesContainer movies={this.state.movies}/>
          <CharactersContainer />
          <FavoritesContainer />
        </main> 
      </div>
      )
  }
}



export default App;