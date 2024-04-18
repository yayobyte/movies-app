import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from "@src/config/ThemeContext"
import { MoviesListScreen } from '@screens/MovieList/MovieListScreen.view';
import { MovieDetailsScreen } from '@src/screens/MovieDetails/MovieDetailsScreen.view';
import { NavigationContainer } from '@react-navigation/native';

import { queryClient } from '@src/config/QueryClient'
import { Stack, navTheme, HOME_SCREEN, MOVIE_DETAILS_SCREEN } from '@src/config/NavigationStack'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer theme={navTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name={HOME_SCREEN} component={MoviesListScreen} />
              <Stack.Screen name={MOVIE_DETAILS_SCREEN} component={MovieDetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
