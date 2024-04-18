import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ApiService } from '@api/ApiService'

export const useMovieListScreenContainer = () => {
  const [search, setSearch] = useState('')
  const { error, isLoading, data } = useQuery({
    queryKey: ['search', search],
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
