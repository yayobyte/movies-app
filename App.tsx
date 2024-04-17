import { StyleSheet, Text, View } from 'react-native';
import { MoviesListScreen } from '@screens/MovieList/MovieListScreen.view';

export default function App() {
  return (
    <View style={styles.container}>
      <MoviesListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
