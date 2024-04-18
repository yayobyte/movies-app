import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { theme } from '@src/config/ThemeContext';

import { styles } from './StartRating.styles'

const MAX_RATING = 10;
const STAR_INCREMENT = 2; // Each star represents 2 rating units (since 5 stars represent a rating out of 10)

export const StarsRating = ({ ratingValue }) => {
  const fullStars = Math.floor(ratingValue / STAR_INCREMENT);
  const halfStars = Math.ceil((ratingValue - fullStars * STAR_INCREMENT) / (STAR_INCREMENT / 2));
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <View style={styles.starRating}>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <Icon key={`full-${index}`} name="star" size={theme.fontSize.lg} color={theme.colors.warning} />
        ))}
      {Array(halfStars)
        .fill()
        .map((_, index) => (
          <Icon key={`half-${index}`} name="star-half" size={theme.fontSize.lg} color={theme.colors.warning} />
        ))}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <Icon key={`empty-${index}`} name="star-border" size={theme.fontSize.lg} color={theme.colors.warning} />
        ))}
    </View>
  )
}

