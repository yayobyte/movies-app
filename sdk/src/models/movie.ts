import { MovieData, SearchQuery, SearchResponse, MovieIbmdData} from "../types/movie"

const searchQueries = [
    "action", "drama", "comedy", "romance", "thriller",
    "sci-fi", "horror", "documentary", "adventure", "fantasy",
    "King", "Boat", "Taxi", "Car", "Bus",
  ];  

export class MovieModel {
    static baseUrl = 'https://search.imdbot.workers.dev/'    

    static async searchMoviesByTitle({ q }: SearchQuery): Promise<MovieData[]> {
        const url = new URL(MovieModel.baseUrl)
        if (!q) { //In case q is not sent, it will query random movies for the firs load
            const randomQuery = searchQueries[Math.floor(Math.random() * searchQueries.length)]
            url.searchParams.append('q', randomQuery)
        } else {
            url.searchParams.append('q', q)
        }

        console.log(url.toString())
        const response = await fetch(url.toString())
        const data: SearchResponse = await response.json()

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}: ${response.statusText}`)
        }

        return data.description
    }

    static async getMovieById({ tt }: SearchQuery): Promise<MovieIbmdData | undefined> {
        if (!tt) {
            throw new Error("IMDb ID 'tt' is required to fetch movie details")
        }

        const url = new URL(MovieModel.baseUrl)
        url.searchParams.append('tt', tt)

        console.log(url.toString())
        const response = await fetch(url.toString())
        const data = await response.json()
        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}: ${response.statusText}`)
        }
        return data.short
    }
}
