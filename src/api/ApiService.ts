import ApiClient from './ApiClient.middleware'
import { SearchResponse, SearchQuery, MovieData } from '@types/movie'

const apiUrl = 'http://localhost'
const apiPort = 3000
const moviesEndpoint = 'movies'

const searchQueries = [
  "action", "drama", "comedy", "romance", "thriller",
  "sci-fi", "horror", "documentary", "adventure", "fantasy"
];

export const ApiService = {
  searchByTitle: async (query: SearchQuery) => {
    const apiClient = new ApiClient(`${apiUrl}:${apiPort}/${moviesEndpoint}`);
    const urlParams = new URLSearchParams(query as unknown as URLSearchParams).toString() || null;
    const result = await apiClient.get<SearchResponse>('search', urlParams);
    console.log(result)
    return result.description
  },
  getTopMovies: () => {
    const apiClient = new ApiClient(`${apiUrl}:${apiPort}/${moviesEndpoint}`);
    return apiClient.get<MovieData[]>('top-movies', null);
  },
  getRandomMovies: async () => {
    const randomQuery = searchQueries[Math.floor(Math.random() * searchQueries.length)]
    return await ApiService.searchByTitle({ q: randomQuery })
  },
}
