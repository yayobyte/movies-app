import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMovieListScreenContainer } from './MovieListScreen.container'
import { styles } from "./MoviesListScreen.styles"
import { Loader } from '@src/components/UI/Loader/Loader.view'
import { ErrorComponent } from '@src/components/UI/Error/Error.view'
import { SearchBar } from '@src/components/SearchBar/SearchBar.view'
import { MovieCard } from "@components/MovieCard/MovieCard.view"

export const MoviesListScreen = () => {
  const { data: movies, isLoading, error, search, setSearch } = useMovieListScreenContainer()

  const title = search.length > 0 ? 'Movies List' : 'Random Movies'

  if (error) return (
      <ErrorComponent message={'Error loading movies'} onRetry={() => {}}/>
  )
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <SearchBar onSearch={setSearch} />
      {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorComponent message={'Error loading movies'} onRetry={() => setSearch('')} />
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            keyExtractor={item => item['#IMDB_ID']}
            showsVerticalScrollIndicator={true}
          />
        )}
      </View>
    </SafeAreaView>
  )
}
