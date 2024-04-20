import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { MovieData } from '@types/movie'

import { styles } from './MovieCard.styles'
import { movieCardContainer } from './MovieCard.container'

export const MovieCard = ({ movie }: { movie: MovieData }) => {
		const { handlePress, theme } = movieCardContainer({ movie })
    return (
		<TouchableOpacity style={styles.card} onPress={handlePress}>
			<Image source={{ uri: movie['#IMG_POSTER'] }} style={styles.poster} />
			<View style={styles.info}>
				<Text style={styles.title}>{movie['#TITLE']}</Text>
				{movie['#RANK'] ? (
					<View style={styles.detailItem}>
						<Icon name="grade" size={theme.fontSize.regularLarge} color={theme.colors.warning} />
						<Text style={styles.details}>Rank {`${movie['#RANK']}`}</Text>
					</View>
				) : null}
				<View style={styles.detailItem}>
					<Icon name="calendar-today" size={theme.fontSize.regularLarge} color={theme.colors.primary} />
					<Text style={styles.year}>{`${movie['#YEAR']}`}</Text>
				</View>
				{movie['#ACTORS'] ? 
					(<View style={styles.detailItem}>
						<Icon name="people" size={theme.fontSize.regularLarge} color={theme.colors.primary} />
						<Text style={[styles.details, styles.actors]} numberOfLines={2} ellipsizeMode="tail">
          					{`${movie['#ACTORS']}`}
        				</Text>
					</View>
				) : null}
				{movie['#IMDB_ID'] ? (
                    <View style={styles.detailItem}>
                        <Icon name="info-outline" size={theme.fontSize.regularLarge} color={theme.colors.warning} />
                        <Text style={styles.details}>IMBD ID: {movie['#IMDB_ID']}</Text>
                    </View>
                ) : null}
                {movie['#TYPE'] ? (
                    <View style={styles.detailItem}>
                        <Icon name="movie-filter" size={theme.fontSize.regularLarge} color={theme.colors.secondary} />
                        <Text style={styles.details}>Type: {movie['#TYPE']}</Text>
                    </View>
                ) : null}
			</View>
		</TouchableOpacity>
	)
}