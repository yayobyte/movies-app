import ApiClient from './ApiClient.middleware'
import { SearchResponse, Movie, MovieData } from '../types/movie'

const apiUrl = 'http://localhost'
const apiPort = 3001
const moviesRoute = 'movies'

const searchEndpoint = 'search'
const getByIdEndpoint = 'by-id'

const apiClient = new ApiClient(`${apiUrl}:${apiPort}/${moviesRoute}`);

export const ApiService = {
  searchByString: async (query: string) => {
    const queryParams = { q: query }
    const urlParams = new URLSearchParams(queryParams).toString() || null;
    try {
      const response = await apiClient.get<MovieData[]>(searchEndpoint, urlParams )
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
  searchById: async (query: string | undefined) => {
    try {
      const response = await apiClient.get<Movie>(`${getByIdEndpoint}/${query}`, '')
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
