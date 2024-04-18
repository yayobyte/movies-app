import { MovieData } from "sdk/src/types/movie"
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp,  } from '@react-navigation/native-stack'

import { RootStackParamList, MOVIE_DETAILS_SCREEN } from '@src/config/NavigationStack'
import { useTheme } from '@src/hooks/useTheme'

interface MovieCarContainerProps {
    movie: MovieData
}

type MovieDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, RootStackParamList['HOME_SCREEN']>

export const movieCardContainer = ({ movie }: MovieCarContainerProps) => {
    const { theme } = useTheme()
    const navigation = useNavigation<MovieDetailsNavigationProp>()
    const handlePress = () => {
        navigation.navigate(MOVIE_DETAILS_SCREEN, { movieId: movie['#IMDB_ID'] ?? '' })
    }

    return { handlePress, theme }
}