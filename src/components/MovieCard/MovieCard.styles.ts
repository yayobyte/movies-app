import { StyleSheet } from 'react-native'
import { theme } from '@src/config/ThemeContext'

const POSTER_WIDTH = 100
const POSTER_HEIGHT = 170

export const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      margin: theme.spacing.lg,
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.regular,
      ...theme.shadow,
      elevation: theme.elevation.regular
    },
    poster: {
      width: POSTER_WIDTH,
      height: POSTER_HEIGHT,
      borderRadius: theme.spacing.md,
      resizeMode: 'cover',
    },
    info: {
      flex: 1,
      padding: theme.spacing.lg,
    },
    title: {
      fontWeight: 'bold',
      fontSize: theme.fontSize.regularLarge,
      marginBottom: theme.spacing.md,
    },
    details: {
      fontSize: theme.fontSize.regular,
      marginLeft: theme.spacing.md,
      color: theme.colors.lightText,
    },
    year: {
      fontSize: theme.fontSize.regular,
      marginLeft: theme.spacing.md,
      fontWeight: 'bold',
      color: theme.colors.lightText,
    },
    detailItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    actors: {
      flexShrink: 1,
      color: theme.colors.secondary,
    },
  })