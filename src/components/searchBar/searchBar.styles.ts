import { StyleSheet } from "react-native"

import { theme } from "@src/config/ThemeContext";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.white,
      elevation: theme.elevation.regular,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      borderRadius: theme.borderRadius.lg,
      paddingHorizontal: theme.spacing.md,
      alignItems: 'center',
      marginHorizontal: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
    },
    input: {
      flex: 1,
      paddingVertical: theme.spacing.lg,
      paddingHorizontal: theme.spacing.md,
      fontSize: 16,
      color: '#333',
    },
    icon: {
      marginRight: 0,
    },
    clearButton: {
      padding: 10,
    }
})