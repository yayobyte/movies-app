import { StyleSheet } from 'react-native'
import { theme } from '@src/config/ThemeContext'

const COVER_HEIGHT = 500

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginBottom: theme.spacing.lg,
    },
    movieImage: {
      width: '100%',
      height: COVER_HEIGHT,
      resizeMode: 'cover',
    },
    detailsContainer: {
      padding: theme.spacing.lg,
    },
    movieTitle: {
      fontSize: theme.fontSize.lg,
      fontWeight: 'bold',
      marginBottom: theme.spacing.md,
    },
    movieGenre: {
      fontSize: theme.fontSize.regular,
      color: theme.colors.lightText,
      marginBottom: theme.spacing.md,
    },
    synopsisContainer: {
      marginBottom: theme.spacing.lg,
    },
    synopsisTitle: {
      fontWeight: 'bold',
      fontSize: theme.fontSize.regular,
      marginBottom: theme.spacing.sm,
    },
    synopsisText: {
      fontSize: theme.fontSize.regular,
      color: theme.colors.secondary,
    },
    starringContainer: {
      marginBottom: theme.spacing.xl,
    },
    starringTitle: {
      fontWeight: 'bold',
      fontSize: theme.fontSize.regular,
      marginBottom: theme.spacing.md,
    },
    actorCard: {
      marginRight: theme.spacing.lg,
      alignItems: 'center',
    },
    actorName: {
      fontSize: theme.fontSize.regular,
      color: theme.colors.lightText,
    },
    reviewsContainer: {
      paddingVertical: theme.spacing.md,
    },
    reviewsTitle: {
      fontWeight: 'bold',
      fontSize: theme.fontSize.regular,
    },
    reviewCard: {
      marginBottom: theme.spacing.md,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.regular,
    },
    reviewAuthor: {
      fontSize: theme.fontSize.regular,
      marginBottom: theme.spacing.lg,
      marginLeft: theme.spacing.md,
      marginTop: theme.spacing.lg,
    },
    reviewSummary: {
      fontSize: theme.fontSize.regular,
      color: theme.colors.lightText,
      marginBottom: theme.spacing.md,
    },
    reviewText: {
      fontSize: theme.fontSize.regular,
      color: theme.colors.secondary,
    },
    reviewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    divider: {
      height: 1,
      backgroundColor: '#ccc',
      marginVertical: 10,
    },  
    backButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.lg,
      alignItems: 'center',
      borderRadius: theme.borderRadius.regular,
    },
    keywordsContainer: {
      flexDirection: 'row',
      padding: theme.spacing.md,
      flexWrap: 'wrap',
    },
    keyword: {
      backgroundColor: theme.colors.highlight,
      overflow: 'hidden',
      borderRadius: theme.borderRadius.regular,
      borderWidth: 0,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.lg,
      marginRight: theme.spacing.md,
      marginBottom: theme.spacing.md,
      fontSize: theme.fontSize.md,
      color: theme.colors.lightText,
    },
    backButtonText: {
      color: theme.colors.white,
      fontSize: theme.fontSize.regularLarge,
      fontWeight: 'bold',
    },
  })
  