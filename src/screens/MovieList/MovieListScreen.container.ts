import { useQuery } from '@tanstack/react-query'
import { ApiService } from '@api/ApiService'

export const useMovieListScreenContainer = () => {
  return useQuery({ queryKey: ['top10Movies'], queryFn: ApiService.getTopMovies })
}
