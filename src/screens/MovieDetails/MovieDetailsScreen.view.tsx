import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useMovieDetailsContainer } from './MovieDetailsScreen.container';
import { Loader } from '@src/components/UI/Loader/Loader.view'
import { ErrorComponent } from '@src/components/UI/Error/Error.view'
import { StarsRating } from '@src/components/StarsRating/StarsRating.view';

import { styles } from './MovieDetailsScreen.styles'


export const MovieDetailsScreen = () => {
  const route = useRoute();
  const { movieId } = route.params;
  const { data, error, isLoading, handlePress } = useMovieDetailsContainer({ movieId })

  return (
    isLoading ? (
      <Loader />
    ) : error ? (
      <ErrorComponent message={'Error loading movies'} onRetry={() => ('')} />
    ) : (
      <ScrollView style={styles.container}>
        <Image source={{ uri: data?.image }} style={styles.movieImage} />
        <View style={styles.detailsContainer}>
          <Text style={styles.movieTitle}>{data?.name}</Text>
          <Text style={styles.movieGenre}>{data?.genre?.join(', ')}</Text>

          <StarsRating ratingValue={data?.aggregateRating?.ratingValue} />
          
          <View style={styles.synopsisContainer}>
            <Text style={styles.synopsisTitle}>Synopsis</Text>
            <Text style={styles.synopsisText}>{data?.description}</Text>
          </View>
          <View style={styles.starringContainer}>
            <Text style={styles.starringTitle}>Starring</Text>
            <FlatList
              data={data?.actor}
              renderItem={({ item }) => (
                <View style={styles.actorCard}>
                  <Image source={{ uri: item?.image }} style={styles.actorImage} />
                  <Text style={styles.actorName}>{item.name}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal
            />
          </View>
          <TouchableOpacity style={styles.bookButton} onPress={handlePress}>
            <Text style={styles.bookButtonText}>Back to list</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  )
};
