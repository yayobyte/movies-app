import { StyleSheet } from "react-native"
import { theme } from "@src/config/ThemeContext"


export const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
    },
    list: {
      flex: 1,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingVertical: 20,
      backgroundColor: '#fff',
      textAlign: 'center',
      borderBottomColor: '#e0e0e0',
      borderBottomWidth: 1,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 20,
      marginTop: 20,
      flexDirection: 'row',
      elevation: 3, // for Android shadow
      shadowColor: '#000', // for iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    poster: {
      width: 100,
      height: 150,
      borderRadius: 8,
    },
    info: {
      flex: 1,
      marginLeft: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    rating: {
      fontSize: 16,
      marginVertical: 4,
    },
    details: {
      fontSize: 14,
      color: 'gray',
    },
  })
  
  