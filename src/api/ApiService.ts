import ApiClient from './ApiClient.middleware'
import { SearchResponse, SearchQuery } from '@types/movie'

const apiUrl = 'http://localhost'
const apiPort = 3001

const ApiService = {
  search: (query: SearchQuery) => {
    const apiClient = new ApiClient(`${apiUrl}:${apiPort}`)
    const urlParams = new URLSearchParams(query as unknown as URLSearchParams).toString() || null
    return apiClient.get<SearchResponse>('convert', urlParams)
  },
}

export default ApiService
