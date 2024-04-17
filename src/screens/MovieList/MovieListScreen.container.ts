import { useQuery } from '@tanstack/react-query'
import { ApiService } from '@api/ApiService'

export const useMovieListScreenContainer = () => {
  return useQuery({ queryKey: ['getRandomMovies'], queryFn: ApiService.searchByString })
}
