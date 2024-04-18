import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    movieImage: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
    },
    detailsContainer: {
      padding: 20,
    },
    movieTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    movieGenre: {
      fontSize: 16,
      color: '#666',
      marginBottom: 8,
    },
    starRating: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    synopsisContainer: {
      marginBottom: 16,
    },
    synopsisTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 4,
    },
    synopsisText: {
      fontSize: 16,
      color: '#333',
    },
    starringContainer: {
      marginBottom: 24,
    },
    starringTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 8,
    },
    actorCard: {
      marginRight: 16,
      alignItems: 'center',
    },
    actorImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginBottom: 4,
    },
    actorName: {
      fontSize: 14,
      color: '#333',
    },
    bookButton: {
      backgroundColor: '#E62117',
      paddingVertical: 12,
      alignItems: 'center',
      borderRadius: 8,
    },
    bookButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  })
  