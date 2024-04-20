import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ApiService } from '../../api/ApiService'
import { queryClient } from '../../config/QueryClient'

export const useMovieListScreenContainer = () => {

  const [search, setSearch] = useState('')
  const { error, isLoading, data } = useQuery({
    queryKey: ['search', search],
    queryFn: () => fetchMovies(search ?? undefined),
  })

  const fetchMovies = (searchTerm: string) => {
    return ApiService.searchByString(searchTerm);
  };

  return {
    error,
    isLoading,
    data: data ?? [],
    search,
    setSearch,
  }
}
