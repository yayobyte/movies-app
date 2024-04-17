export interface MovieData {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string;
  photo_width: number;
  photo_height: number;
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
