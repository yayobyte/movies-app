import { useState } from 'react';
import { useMovieListScreenContainer } from './MovieListScreen.container';
import { MovieCard } from '../../components/MovieCard/MovieCard.view';

export const MoviesListScreen = () => {
  const { data: movies, isLoading, error, setSearch } = useMovieListScreenContainer();
  const [input, setInput] = useState('');

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setSearch(input)
  };

  return (
    <div className="container mt-3">
      <h1>{input.length > 0 ? 'Movies List' : 'Random Movies'}</h1>
      <form onSubmit={handleSubmit} className="d-flex mb-4">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={handleInputChange}
          placeholder="Search movies…"
        />
        <button className="btn btn-primary ms-2">Search</button>
      </form>
      <div className="row">
        {movies.map(movie => (
          <div key={movie["#IMDB_ID"]} className="col-md-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}
