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
  


  render() {
    console.log(this.state.movies)
    return (
      <div>
        <UserForm user={this.state.user}/>
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




// const getCharacters = characters => {
//   console.log("in");
//   const promises = characters.map(character => {
//     return fetch(character)
//       .then(res => res.json())
//       .then(data => ({
//         name: data.name,
//         homeWorld: getHomeWorld(data.homeWorld),
//         species: getSpecies(data.speies[0])
//       }));
//   });
//   return Promise.all(promises);
// };

// const getHomeWorld = url => {
//   return fetch(url)
//     .then(res => res.json())
//     .then(homeWorld => homeWorld);
// };

// const getSpecies = url => {
//   return fetch(url)
//     .then(res => res.json())
//     .then(data => ({
//       species: data.species[0]
//     }));
// };