import { MovieData, SearchQuery, Movie } from "../../types/movie"
import { mapApiDataToMovieIbmdData } from './movie.helper'

const searchQueries = [
    "action", "drama", "comedy", "romance", "thriller",
    "sci-fi", "horror", "documentary", "adventure", "fantasy",
    "King", "Boat", "Taxi", "Car", "Bus",
  ];  

export class MovieModel {
    private static baseUrl = 'https://www.omdbapi.com/'
    private static apiKey = process.env.OMDB_API_KEY || ''

    public static async searchMoviesByTitle({ q }: SearchQuery): Promise<MovieData[]> {
    const url = new URL(MovieModel.baseUrl)

    if (!q) { //In case q is not sent, it will query random movies for the firs load
        const randomQuery = searchQueries[Math.floor(Math.random() * searchQueries.length)]
        url.searchParams.append('s', randomQuery)
    } else {
        url.searchParams.append('s', q)
    }

    url.searchParams.append('apiKey', MovieModel.apiKey)

    try {
      console.log(url.toString())
      const response = await fetch(url.toString())
      const data = await response.json()

      if (data.Response === "True") {
        return data.Search.map((movie: any) => ({
          "#TITLE": movie.Title,
          "#YEAR": parseInt(movie.Year, 10),
          "#IMDB_ID": movie.imdbID,
          "#RANK": 0,
          "#ACTORS": "",
          "#AKA": `${movie.Title} (${movie.Year})`,
          "#IMDB_URL": `https://www.imdb.com/title/${movie.imdbID}/`,
          "#IMDB_IV": "",
          "#IMG_POSTER": movie.Poster,
          "#TYPE": movie.Type,
          photo_width: 0,
          photo_height: 0
        }))
      } else {
        throw new Error('Failed to fetch movies from fallback API')
      }
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching data from fallback endpoint')
    }
  }

  static async getMovieById({ tt }: SearchQuery): Promise<Movie | undefined> {
    if (!tt) {
      throw new Error("IMDb ID 'tt' is required to fetch movie details")
    }

    const url = new URL(this.baseUrl)
    url.searchParams.append('i', tt)
    url.searchParams.append('apikey',  MovieModel.apiKey)

    const response = await fetch(url.toString())
    const data = await response.json()
    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}: ${response.statusText}`)
    }

    if (data.Response !== "True") {
      throw new Error(data.Error || 'Failed to fetch movie data')
    }

    return mapApiDataToMovieIbmdData(data)
  }

}
