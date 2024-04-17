import ApiClient from './ApiClient.middleware'
import { SearchResponse, SearchQuery, MovieData } from '@types/movie'

const apiUrl = 'http://localhost'
const apiPort = 3000
const moviesEndpoint = 'movies'

const searchQueries = [
  "action", "drama", "comedy", "romance", "thriller",
  "sci-fi", "horror", "documentary", "adventure", "fantasy"
];

const apiClient = new ApiClient(`${apiUrl}:${apiPort}/${moviesEndpoint}`);

export const ApiService = {
  searchByString: async (query: string | undefined) => {
    const randomQuery = searchQueries[Math.floor(Math.random() * searchQueries.length)]
    const queryParams = { q: query || randomQuery }
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
