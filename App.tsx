import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from "@src/config/ThemeContext"
import { MoviesListScreen } from '@screens/MovieList/MovieListScreen.view';

import { queryClient } from '@src/config/QueryClient'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <MoviesListScreen />
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
