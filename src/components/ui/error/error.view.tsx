import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ErrorComponent = ({ message, onRetry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
      {onRetry && <Button title="Try Again" onPress={onRetry} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    backgroundColor: '#f8d7da',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f5c6cb', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#721c24', 
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  }
})
