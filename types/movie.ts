export interface MovieListItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface SearchResponse {
  Search: MovieListItem[]
  totalResults: string
  Response: string
}

export interface SearchQuery {
  s: string
}
