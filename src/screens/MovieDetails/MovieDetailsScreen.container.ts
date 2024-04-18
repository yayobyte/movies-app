import { useQuery } from '@tanstack/react-query'
import { ApiService } from '@api/ApiService'
import { useNavigation } from '@react-navigation/native'
import { Movie } from '@types/movie'

interface MovieDetailsContainerProps {
    movieId: string
}

export const useMovieDetailsContainer = ({ movieId }: MovieDetailsContainerProps) => {
    const navigation = useNavigation()

    const { error, isLoading, data } = useQuery({
        queryKey: ['get-by-id', movieId],
        queryFn: () => ApiService.searchById(movieId),
    })

    const handlePress = () => {
        navigation.goBack()
    }

    return {
        error,
        isLoading,
        data: data as Movie,
        handlePress,
    }
}