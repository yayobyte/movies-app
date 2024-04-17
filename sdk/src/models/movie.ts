import { MovieData, SearchQuery, SearchResponse} from "../types/movie"
import { top10Movies } from "./data"

export class MovieModel {
    static baseUrl = 'https://search.imdbot.workers.dev/'

    static async searchMoviesByTitle({ q }: SearchQuery): Promise<MovieData[]> {
        if (!q) {
            throw new Error("Query string 'q' is required to search movies")
        }

        const url = new URL(MovieModel.baseUrl)
        url.searchParams.append('q', q)

        const response = await fetch(url.toString())
        const data: SearchResponse = await response.json()

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}: ${response.statusText}`)
        }

        return data.description
    }

    static async getMovieById({ tt }: SearchQuery): Promise<MovieData | undefined> {
        if (!tt) {
            throw new Error("IMDb ID 'tt' is required to fetch movie details")
        }

        const url = new URL(MovieModel.baseUrl)
        url.searchParams.append('tt', tt)

        const response = await fetch(url.toString())
        const data: SearchResponse = await response.json();

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}: ${response.statusText}`)
        }

        return data.description.length > 0 ? data.description[0] : undefined
    }

    static async getTop10Movies(): Promise<MovieData[]> {
        return Promise.resolve(top10Movies)
    }
}
