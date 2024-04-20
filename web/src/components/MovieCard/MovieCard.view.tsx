type MovieCardProps = {
    movie: {
        "#TITLE": string
        "#YEAR": number
        "#IMDB_ID": string
        "#IMG_POSTER": string
        "#TYPE"?: string
    }
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
    <img src={movie["#IMG_POSTER"]} className="card-img-top" alt={movie["#TITLE"]} />
    <div className="card-body">
      <h5 className="card-title">{movie["#TITLE"]}</h5>
      <p className="card-text">Year: {movie["#YEAR"]}</p>
      <p className="card-text">IMDb ID: {movie["#IMDB_ID"]}</p>
      <p className="card-text">Type: {movie["#TYPE"]}</p>
    </div>
  </div>
  )
}
