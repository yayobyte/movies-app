import { theme } from "@src/config/ThemeContext"

import { StyleSheet } from "react-native" 

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.xl,
      backgroundColor: theme.colors.white,
    },
    errorText: {
      fontSize: theme.fontSize.regular,
      fontWeight: 'bold',
      color: theme.colors.lightText,
      marginBottom: theme.spacing.lg,
    },
    retryButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      borderRadius: theme.borderRadius.regular,
      ...theme.shadow,
    },
    retryButtonText: {
      color: theme.colors.white, 
      fontWeight: '600',
      fontSize: theme.fontSize.regular,
    }
  })