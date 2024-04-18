import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ApiService } from '@api/ApiService'

export const useMovieListScreenContainer = () => {
  const [search, setSearch] = useState('')
  console.log(search)
  const { error, isLoading, data } = useQuery({
    queryKey: ['getRandomMovies', search],
    queryFn: () => ApiService.searchByString(search ?? undefined),
  })
  return {
    error,
    isLoading,
    data: data ?? [],
    search,
    setSearch
  }
}
