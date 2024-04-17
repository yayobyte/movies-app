import React from 'react'
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { movies } from '@api/db-in-file'
import { MovieData } from '@types/movie'

const MovieCard = ({ movie }: { movie: MovieData }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: movie['#IMG_POSTER'] }} style={styles.poster} />
    <View style={styles.info}>
      <Text style={styles.title}>{movie['#TITLE']}</Text>
      {/* Star rating component */}
      <Text style={styles.rating}>{'⭐'.repeat(3)} Rating</Text>
      <Text style={styles.details}>{`Aka | ${movie['#AKA']}`}</Text>
      <Text style={styles.details}>{`${movie['#RANK']} | ${movie['#YEAR']}`}</Text>
    </View>
  </TouchableOpacity>
);

export const MoviesListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Now Showing</Text>
      <FlatList
        style={styles.list}
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={item => item["#IMDB_ID"]}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  list: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
    marginVertical: 4,
  },
  details: {
    fontSize: 14,
    color: 'gray',
  },
})

