import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMovieListScreenContainer } from './MovieListScreen.container'
import { styles } from "./MoviesListScreen.styles"
import { MovieData } from '@types/movie'
import { Loader } from '@src/components/ui/loader/Loader.view'
import { ErrorComponent } from '@components/ui/error/error.view'
import { SearchBar } from '@components/searchBar/searchBar.view'

const MovieCard = ({ movie }: { movie: MovieData }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: movie['#IMG_POSTER'] }} style={styles.poster} />
    <View style={styles.info}>
      <Text style={styles.title}>{movie['#TITLE']}</Text>
      {/* TODO: Star calculation */}
      <Text style={styles.details}>{`IMBD Id | ${movie['#IMDB_ID']}`}</Text>
      <Text style={styles.details}>Rank {`${movie['#RANK']}`}</Text>
      <Text style={styles.details}>Year {`${movie['#YEAR']}`}</Text>
      <Text style={styles.details}>Aka {`${movie['#AKA']}`}</Text>
      <Text style={styles.details}>Actors {`${movie['#ACTORS']}`}</Text>
    </View>
  </TouchableOpacity>
)

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
