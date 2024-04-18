import ApiClient from './ApiClient.middleware'
import { SearchResponse, SearchQuery, MovieData } from '@types/movie'

const apiUrl = 'http://192.168.1.160'
const apiPort = 3000
const moviesEndpoint = 'movies'

const apiClient = new ApiClient(`${apiUrl}:${apiPort}/${moviesEndpoint}`);

export const ApiService = {
  searchByString: async (query: string | undefined) => {
    const queryParams = { q: query }
    const urlParams = new URLSearchParams(queryParams).toString() || null;
    try {
      const response = await apiClient.get<SearchResponse>('search', urlParams )
      if (!response) {
        console.log('Network response was not ok')
        return []
      }
      return response
    } catch (error) {
      console.error('Error during GET request:', error)
      throw error
    }
  },
}
