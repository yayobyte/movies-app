import { useQuery } from '@tanstack/react-query'
import { ApiService } from '../../api/ApiService'
import { useNavigate } from 'react-router-dom'
import { Movie } from '../../types/movie'

interface MovieDetailsContainerProps {
    id: string
}

export const useMovieDetailsScreenContainer = ({ id }: MovieDetailsContainerProps) => {
    const navigation = useNavigate()

    const { error, isLoading, data } = useQuery({
        queryKey: ['get-by-id', id],
        queryFn: () => ApiService.searchById(id),
    })

    const handlePress = () => {
        navigation(-1)
    }

    return {
        error,
        isLoading,
        data: data as Movie,
        handlePress,
    }
}