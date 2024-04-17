import ApiClient from './ApiClient.middleware'
import { SearchResponse, SearchQuery } from '@types/movie'

const apiUrl = 'http://localhost'
const apiPort = 3000
const moviesEndpoint = 'movies'

export const ApiService = {
  searchByTitle: (query: SearchQuery) => {
    const apiClient = new ApiClient(`${apiUrl}:${apiPort}/${moviesEndpoint}`);
    const urlParams = new URLSearchParams(query as unknown as URLSearchParams).toString() || null;
    return apiClient.get<SearchResponse>('search', urlParams);
  },
  getTopMovies: () => {
    const apiClient = new ApiClient(`${apiUrl}:${apiPort}/${moviesEndpoint}`);
    return apiClient.get<SearchResponse>('top-movies', null);
  },
}
