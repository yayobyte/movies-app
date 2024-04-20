import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMovieListScreenContainer } from './MovieListScreen.container'
import { styles } from "./MoviesListScreen.styles"
import { Loader } from '@src/components/UserInterface/Loader/Loader.view'
import { ErrorComponent } from '@src/components/UserInterface/Error/Error.view'
import { SearchBar } from '@src/components/Search/SearchBar.view'
import { MovieCard } from "@components/MovieCard/MovieCard.view"

//TODO: Intl strings in a separated file
const ERROR_MESSAGE = 'Error loading movies or the search.imdbot.workers.dev api might be offline'
const EMPTY_LIST = 'No results with the provided strings or the search.imdbot.workers.dev api might be offline'

export const MoviesListScreen = () => {
  const { data: movies, isLoading, error, search, setSearch } = useMovieListScreenContainer()

  const title = search.length > 0 ? 'Movies List' : 'Random Movies'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <SearchBar onSearch={setSearch} />
      {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorComponent message={ERROR_MESSAGE} onRetry={() => setSearch('')} />
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard movie={item} />}
            keyExtractor={item => item['#IMDB_ID']}
            showsVerticalScrollIndicator={true}
            ListEmptyComponent={() => (
              <Text style={styles.emptyMessage}>{EMPTY_LIST}</Text>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  )
}
