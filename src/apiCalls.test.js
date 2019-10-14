import { getMovies } from './apiCalls'

describe('getMovies', () => {

  const mockMovies = [
    {
      episode_id: 1,
      title: 'Title One',
      release_date: '2019-05-25',
      opening_crawl: 'Some scroll text',
      characters: ['url', 'another url']
    },
    {
      episode_id: 2,
      title: 'Title Two',
      release_date: '2019-06-25',
      opening_crawl: 'Some more scroll text',
      characters: ['url', 'another url', 'and one more']
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      })
    })

  });

  it('should call fetch with the correct url', () => {
    //this test is passing, but with errors
    //because the response goes through a map() there will need to be additional logic involved
    getMovies()
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/')

  });

  it('should return an error if property is not ok (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getMovies()).rejects.toEqual(Error('Error getting your movies. Try again later.'))
  });

  it('should return and error if the server is down (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(getMovies()).rejects.toEqual(Error('fetch failed'));
  });



});