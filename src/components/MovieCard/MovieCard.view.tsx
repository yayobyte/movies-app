import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MovieData } from '@types/movie'
import { styles } from './MovieCard.styles'
import { useTheme } from '@src/hooks/useTheme'

export const MovieCard = ({ movie }: { movie: MovieData }) => {
		const { theme } = useTheme()
    return (
		<TouchableOpacity style={styles.card}>
			<Image source={{ uri: movie['#IMG_POSTER'] }} style={styles.poster} />
			<View style={styles.info}>
				<Text style={styles.title}>{movie['#TITLE']}</Text>
				<View style={styles.detailItem}>
					<Icon name="grade" size={theme.fontSize.regularLarge} color={theme.colors.warning} />
					<Text style={styles.details}>Rank {`${movie['#RANK']}`}</Text>
				</View>
				<View style={styles.detailItem}>
					<Icon name="calendar-today" size={theme.fontSize.regularLarge} color={theme.colors.primary} />
					<Text style={styles.year}>{`${movie['#YEAR']}`}</Text>
				</View>
				<View style={styles.detailItem}>
					<Icon name="people" size={20} color={theme.colors.primary} />
					<Text style={[styles.details, styles.actors]} numberOfLines={2} ellipsizeMode="tail">
          	{`${movie['#ACTORS']}`}
        	</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}