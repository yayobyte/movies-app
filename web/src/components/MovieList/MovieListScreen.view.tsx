import { useMovieListScreenContainer } from './MovieListScreen.container'
import './MoviesListScreen.styles.css'

const MoviesListScreen = () => {
  const { data: movies, isLoading, error, search, setSearch } = useMovieListScreenContainer()

  const title = search.length > 0 ? 'Movies List' : 'Random Movies';

  return (
    <div className="container">
      <h1>{title}</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search movies…" />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading movies</p>
      ) : (
        <ul>
          {movies?.map(movie => (
            <li key={movie['#IMDB_ID']}>{movie['#TITLE']}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesListScreen;
