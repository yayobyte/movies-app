import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./config/ThemeContext"
import { queryClient } from './config/QueryClient'
import { MoviesListScreen } from './screens/MovieList/MovieListScreen.view'
import { MovieDetailsScreen } from './screens/MovieDetails/MovieDetailsScreen.view'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<MoviesListScreen />} />
            <Route path="/movie/:id" element={<MovieDetailsScreen />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
