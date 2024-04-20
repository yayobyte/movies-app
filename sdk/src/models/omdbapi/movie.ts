import { MovieData, SearchQuery, MovieIbmdData, Movie } from "../../types/movie"

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
          photo_width: 300,
          photo_height: 450
        }))
      } else {
        throw new Error('Failed to fetch movies from fallback API')
      }
    } catch (error) {
      console.error(error)
      throw new Error('Error fetching data from fallback endpoint')
    }
  }

  static async getMovieById({ tt }: SearchQuery): Promise<MovieIbmdData | undefined> {
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

    return this.mapApiDataToMovieIbmdData(data)
  }

  private static mapApiDataToMovieIbmdData(data: any): MovieIbmdData {
    const movie: Movie = {
      '@context': 'https://schema.org',
      '@type': 'Movie',
      url: `https://www.imdb.com/title/${data.imdbID}/`,
      name: data.Title,
      image: data.Poster,
      description: data.Plot,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingCount: parseInt(data.imdbVotes.replace(/,/g, ''), 10),
        bestRating: 10,
        worstRating: 1,
        ratingValue: parseFloat(data.imdbRating)
      },
      contentRating: data.Rated,
      genre: data.Genre.split(', ').map((g: string) => g.trim()),
      datePublished: data.Released,
      keywords: data.Genre.replace(/, /g, ','),
      trailer: {
        '@type': 'VideoObject',
        name: 'Official Trailer',
        embedUrl: '', // Assume no data available
        thumbnail: {
          '@type': 'ImageObject',
          contentUrl: data.Poster,
        },
        thumbnailUrl: data.Poster,
        url: '', // Assume no data available
        description: '',
        duration: data.Runtime,
        uploadDate: data.Released,
      },
      actor: data.Actors.split(', ').map((name: string) => ({
        '@type': 'Person',
        url: '', // No URL available
        name,
      })),
      director: {
        '@type': 'Person',
        url: '', // No URL available
        name: data.Director,
      },
      creator: [], // No data available
      duration: data.Runtime
    }

    return {
      short: movie,
      imdbId: data.imdbID
    }
  }
}
