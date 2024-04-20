export interface MovieData {
  "#TITLE": string
  "#YEAR": number
  "#IMDB_ID": string
  "#RANK": number
  "#ACTORS": string
  "#AKA": string
  "#IMDB_URL": string
  "#IMDB_IV": string
  "#IMG_POSTER": string
  "#TYPE"?: string
  photo_width: number
  photo_height: number
}

export interface SearchResponse {
  description: MovieData[]
  ok: boolean
  error_code: number
}

export interface SearchQuery {
  q?: string
  tt?: string
}

interface Person {
  '@type': 'Person'
  url: string
  name: string
}

interface AggregateRating {
  '@type': 'AggregateRating'
  ratingCount: number
  bestRating: number
  worstRating: number
  ratingValue: number
}

interface VideoObject {
  '@type': 'VideoObject'
  name: string
  embedUrl: string
  thumbnail: ImageObject
  thumbnailUrl: string
  url: string
  description: string
  duration: string
  uploadDate: string
}

interface ImageObject {
  '@type': 'ImageObject'
  contentUrl: string
}

export interface Movie {
  '@context': string
  '@type': string
  url: string
  name: string
  image: string
  description: string
  aggregateRating: AggregateRating
  contentRating: string
  genre: string[]
  datePublished: string
  keywords: string
  trailer: VideoObject
  actor: Person[]
  director?: Person
  creator: Person[]
  duration: string
}

export interface MovieIbmdData {
  short: Movie;
  imdbId: string;
}