import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useTheme } from '@src/hooks/useTheme'
import { styles } from './SearchBar.styles'

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  const { theme } = useTheme()

  const clearSearch = () => setQuery('')

  return (
    <View style={styles.container}>
      <Icon name="search" size={theme.fontSize.lg} color={theme.colors.primary} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Search movies…"
        returnKeyType="search"
        onSubmitEditing={() => onSearch(query)}
        placeholderTextColor="#666"
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
          <Icon name="close" size={theme.fontSize.lg} color={theme.colors.lightText} />
        </TouchableOpacity>
      )}
    </View>
  );
}

