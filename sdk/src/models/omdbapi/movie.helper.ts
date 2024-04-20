import { Movie } from '../../types/movie'

export const mapApiDataToMovieIbmdData = (data: any): Movie => {
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

    return movie
  }