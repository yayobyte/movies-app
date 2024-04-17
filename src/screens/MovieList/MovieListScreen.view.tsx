import React from 'react'
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMovieListScreenContainer } from './MovieListScreen.container'
import { styles } from "./MoviesListScreen.styles"
import { MovieData } from '@types/movie'

const MovieCard = ({ movie }: { movie: MovieData }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: movie['#IMG_POSTER'] }} style={styles.poster} />
    <View style={styles.info}>
      <Text style={styles.title}>{movie['#TITLE']}</Text>
      {/* TODO: Star calculation */}
      <Text style={styles.rating}>{'⭐'.repeat(3)} Rating</Text>
      <Text style={styles.details}>{`IMBD Id | ${movie['#IMDB_ID']}`}</Text>
      <Text style={styles.details}>Rank {`${movie['#RANK']}`}</Text>
      <Text style={styles.details}>Year {`${movie['#YEAR']}`}</Text>
      <Text style={styles.details}>Aka {`${movie['#AKA']}`}</Text>
      <Text style={styles.details}>Actors {`${movie['#ACTORS']}`}</Text>
    </View>
  </TouchableOpacity>
)

export const MoviesListScreen = () => {
  const { data: movies, isLoading, error } = useMovieListScreenContainer()

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error loading data.</Text>

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Top Movies</Text>
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={item => item['#IMDB_ID']}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}
