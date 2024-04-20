import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'

import { useMovieDetailsContainer } from './MovieDetailsScreen.container'
import { Loader } from '@src/components/UI/Loader/Loader.view'
import { ErrorComponent } from '@src/components/UI/Error/Error.view'
import { StarsRating } from '@src/components/StarsRating/StarsRating.view'

import { styles } from './MovieDetailsScreen.styles'
import { useTheme } from '@src/hooks/useTheme'


export const MovieDetailsScreen = () => {
  const route = useRoute();
  const { movieId } = route.params;
  const { theme } = useTheme()
  const { data, error, isLoading, handlePress } = useMovieDetailsContainer({ movieId })

  const keywordsArray = data?.keywords.split(',').map(keyword => keyword.trim())

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

          {data.director ? (
            <View style={styles.directorContainer} >
              <IconMaterial name="emoji-people" size={theme.fontSize.regularLarge} color={theme.colors.secondary} />
              <Text style={styles.director}>{data?.director?.name}</Text>
            </View>
          ) : null}

          {data.contentRating ? (
            <View style={styles.ratingContainer} >
              <IconMaterial name="18-up-rating" size={theme.fontSize.regularLarge} color={theme.colors.primary} />
              <Text style={styles.rating}>{data?.contentRating}</Text>
            </View>
          ) : null}
          
          {data.duration ? (
            <View style={styles.durationContainer} >
              <Icon name="clock-outline" size={theme.fontSize.regularLarge} color={theme.colors.primary} />
              <Text style={styles.duration}>{data?.duration}</Text>
            </View>
          ) : null}

          <View style={styles.synopsisContainer}>
            <Text style={styles.synopsisTitle}>Synopsis</Text>
            <Text style={styles.synopsisText}>{data?.description}</Text>
          </View>
          <View style={styles.starringContainer}>
            <Text style={styles.starringTitle}>Starring</Text>
            <View style={styles.detailItem}>
              <IconMaterial name="people" size={theme.fontSize.regularLarge} color={theme.colors.primary} />
              <FlatList
                data={data?.actor}
                renderItem={({ item }) => (
                  <View style={styles.actorCard}>
                    <Text style={[styles.actorName]} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
              />
              </View>
          </View>
          <View style={styles.starringContainer}>
            <Text style={styles.starringTitle}>Keywords</Text>
            <View style={styles.keywordsContainer}>
              {keywordsArray && keywordsArray.map((keyword, index) => (
                <Text key={index} style={styles.keyword}>{keyword}</Text>
              ))}
            </View>
          </View>
          <TouchableOpacity style={styles.backButton} onPress={handlePress}>
            <Text style={styles.backButtonText}>Back to list</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  )
};
