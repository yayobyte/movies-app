import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./config/ThemeContext"
import { queryClient } from './config/QueryClient'
import MoviesListScreen from './components/MovieList/MovieListScreen.view'
// import MovieDetailsScreen from './components/MovieDetailsScreen'

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<MoviesListScreen />} />
            {/* <Route path="/movie/:id" element={<MovieDetailsScreen />} /> */}
          </Routes>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
