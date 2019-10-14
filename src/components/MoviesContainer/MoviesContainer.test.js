import React from 'react'; 
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer'

describe('MoviesContainer', () => {

  it('should match Snapshot', () => {
    const wrapper = shallow(
      <MoviesContainer movies={[{
        characters:["https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/11/", "https://swapi.co/api/people/16/", "https://swapi.co/api/people/20/", "https://swapi.co/api/people/21/", "https://swapi.co/api/people/32/", "https://swapi.co/api/people/33/", "https://swapi.co/api/people/34/", "https://swapi.co/api/people/36/", "https://swapi.co/api/people/37/", "https://swapi.co/api/people/38/", "https://swapi.co/api/people/39/", "https://swapi.co/api/people/40/", "https://swapi.co/api/people/41/", "https://swapi.co/api/people/42/", "https://swapi.co/api/people/43/", "https://swapi.co/api/people/44/", "https://swapi.co/api/people/46/", "https://swapi.co/api/people/48/", "https://swapi.co/api/people/49/", "https://swapi.co/api/people/50/", "https://swapi.co/api/people/51/", "https://swapi.co/api/people/52/", "https://swapi.co/api/people/53/", "https://swapi.co/api/people/54/", "https://swapi.co/api/people/55/", "https://swapi.co/api/people/56/", "https://swapi.co/api/people/57/", "https://swapi.co/api/people/58/", "https://swapi.co/api/people/59/", "https://swapi.co/api/people/47/", "https://swapi.co/api/people/35/"],
        episode_id: 1,
        opening_crawl: "Turmoil has engulfed the Galactic Republic.The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debatesthis alarming chain of events,the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
        release_date: "1999-05-19",
        title: "The Phantom Menace"
      },
      {
        characters:["https://swapi.co/api/people/2/", "https://swapi.co/api/people/3/", "https://swapi.co/api/people/6/", "https://swapi.co/api/people/7/", "https://swapi.co/api/people/10/", "https://swapi.co/api/people/11/", "https://swapi.co/api/people/20/", "https://swapi.co/api/people/21/", "https://swapi.co/api/people/22/", "https://swapi.co/api/people/33/", "https://swapi.co/api/people/36/", "https://swapi.co/api/people/40/", "https://swapi.co/api/people/43/", "https://swapi.co/api/people/46/", "https://swapi.co/api/people/51/", "https://swapi.co/api/people/52/", "https://swapi.co/api/people/53/", "https://swapi.co/api/people/58/", "https://swapi.co/api/people/59/", "https://swapi.co/api/people/60/", "https://swapi.co/api/people/61/", "https://swapi.co/api/people/62/", "https://swapi.co/api/people/63/", "https://swapi.co/api/people/64/", "https://swapi.co/api/people/65/", "https://swapi.co/api/people/66/", "https://swapi.co/api/people/67/", "https://swapi.co/api/people/68/", "https://swapi.co/api/people/69/", "https://swapi.co/api/people/70/", "https://swapi.co/api/people/71/", "https://swapi.co/api/people/72/", "https://swapi.co/api/people/73/", "https://swapi.co/api/people/74/", "https://swapi.co/api/people/75/", "https://swapi.co/api/people/76/", "https://swapi.co/api/people/77/", "https://swapi.co/api/people/78/", "https://swapi.co/api/people/82/", "https://swapi.co/api/people/35/"],
        episode_id: 2,
        opening_crawl: "There is unrest in the Galactic Senate.Several thousand solar systems have declared their intentions to leave the Republic. This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy.Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....",
        release_date: "2002-05-16",
        title: "Attack of the Clones"
        }]} getCharacters={jest.fn()} />

    )
    expect(wrapper).toMatchSnapshot();
  })


});