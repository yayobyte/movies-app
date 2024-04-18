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
    poster: {
      width: POSTER_WIDTH,
      height: POSTER_HEIGHT,
      borderRadius: theme.spacing.md,
    },
    rating: {
      fontSize: theme.fontSize.regular,
      marginVertical: theme.spacing.sm,
    },
  })
  
  