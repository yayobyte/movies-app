import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from "@src/config/ThemeContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MoviesListScreen } from '@screens/MovieList/MovieListScreen.view';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchInterval: 1000 * 60 * 15, // 15 minutes
      refetchOnWindowFocus: false,
    }
  }
})

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
