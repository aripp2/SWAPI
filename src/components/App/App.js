import React, { Component } from 'react';
import './App.scss';
import UserProfile from '../UserProfile/UserProfile';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import UserForm from '../UserForm/UserForm';

// import { getMovies } from '../../../src/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

//   componentDidMount() {
//     getMovies()
//     .then(movies => this.setState({ movies: movies}))
// console.log(this.state)
//   }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
    .then(res => res.json())
    // .then(films => console.log(films))
    .then(films => {
      const allFilms = films.results.map(film => {
      const { episode_id, title, release_date, opening_crawl, characters } = film;
        return { 
          episode_id, 
          title, 
          release_date, 
          opening_crawl, 
          characters 
        }
      })
      console.log(allFilms)
      this.setState({ movies: allFilms })
    })
  }


  render() {
    return (
      <div>
        <UserForm />
        <UserProfile />
        <main>
          <h1>SWAPI</h1>
          <MoviesContainer movies={this.state.movies}/>
          <CharactersContainer />
          <FavoritesContainer />
        </main> 
      </div>
      )
  }
}



export default App;
