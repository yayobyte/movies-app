import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { theme } from '@src/config/ThemeContext';

import { styles } from './StartRating.styles'

const MAX_RATING = 10;
const STAR_INCREMENT = 2; // Each star represents 2 rating units (since 5 stars represent a rating out of 10)

export const StarsRating = ({ ratingValue }) => {
    const fullStars = Math.floor(ratingValue / STAR_INCREMENT); // Each star represents a rating of 2
    const halfStar = ratingValue % 2 >= 1 ? 1 : 0; // Add a half star if there's a remainder of 1 or more
    const emptyStars = 5 - fullStars - halfStar; // Calculate the remaining empty stars
  
    return (
      <View style={styles.starRating}>
        {[...Array(fullStars)].map((_, index) => (
          <Icon key={`full-${index}`} name="star" size={20} color="#ffd700" />
        ))}
        {halfStar === 1 && (
          <Icon key="half-1" name="star-half" size={20} color="#ffd700" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <Icon key={`empty-${index}`} name="star-outline" size={20} color="#ffd700" />
        ))}
      </View>
    )
  }
