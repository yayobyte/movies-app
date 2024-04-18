import { StyleSheet } from "react-native"
import { theme } from "@src/config/ThemeContext"

const POSTER_WIDTH = 100
const POSTER_HEIGHT = 150

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    list: {
      flex: 1,
    },
    header: {
      fontSize: theme.fontSize.xl,
      fontWeight: 'bold',
      paddingVertical: theme.spacing.md,
      backgroundColor: '#fff',
      textAlign: 'center',
    },
    card: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.regular,
      padding: theme.spacing.lg,
      marginHorizontal: theme.spacing.lg,
      marginVertical: theme.spacing.lg,
      flexDirection: 'row',
      elevation: theme.elevation.regular, // for Android shadow
      ...theme.shadow,
    },
    poster: {
      width: POSTER_WIDTH,
      height: POSTER_HEIGHT,
      borderRadius: theme.spacing.md,
    },
    info: {
      flex: 1,
      marginLeft: theme.spacing.lg,
    },
    title: {
      fontSize: theme.fontSize.regular,
      fontWeight: 'bold',
    },
    rating: {
      fontSize: theme.fontSize.regular,
      marginVertical: theme.spacing.sm,
    },
    details: {
      fontSize: theme.fontSize.regular,
      color: theme.colors.lightText,
    },
  })
  
  