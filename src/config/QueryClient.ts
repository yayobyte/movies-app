import { QueryClient } from '@tanstack/react-query'

const STALE_TIME = 1000 * 60 * 5 // 5 minutes
const REFETCH_INTERVAL = 1000 * 60 * 30 // 15 minutes

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchInterval: 1000 * 60 * 15, // 15 minutes
        refetchOnWindowFocus: false,
      }
    }
  })