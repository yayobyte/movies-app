import { QueryClient } from '@tanstack/react-query'

const STALE_TIME = 1000 * 60 * 5 // 5 minutes
const REFETCH_INTERVAL = 1000 * 60 * 30 // 15 minutes

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: STALE_TIME,
        refetchInterval: REFETCH_INTERVAL,
        refetchOnWindowFocus: false,
      }
    }
  })