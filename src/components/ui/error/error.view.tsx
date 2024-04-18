import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Error.styles'

export const ErrorComponent = ({ message, onRetry }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{message}</Text>
        {onRetry && (
          <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };