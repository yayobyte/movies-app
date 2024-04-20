import { useParams } from 'react-router-dom';
import { useMovieDetailsScreenContainer } from './MovieDetailsScreen.container'
import { Error } from '../../components/Error/Error.view'
import { Loading } from '../../components/Loading/Loading.view'

export const MovieDetailsScreen = () => {
  const { id } = useParams()
  const {
    error,
    isLoading,
    data,
    handlePress,
  } = useMovieDetailsScreenContainer({ id: id || '' })

  if (isLoading) {
    return <Loading />
  }

  if (error) {
      return <Error message={error.message} onRetry={() => handlePress()} />
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4">
          <img src={data?.image} alt={data?.name} className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-md-8">
          <h1 className="mb-3">{data?.name} ({data?.datePublished.slice(0, 4)})</h1>
          <h6 className="text-muted mb-2">{data?.genre.join(", ")}</h6>
          <p className="lead">{data?.description}</p>
          <hr/>
          <div>
            <p className="mb-1"><strong>Director:</strong> {data?.director?.name}</p>
            <p className="mb-1"><strong>Actors:</strong> {data?.actor.map(a => a.name).join(", ")}</p>
            <p className="mb-1"><strong>Rating:</strong> {data?.aggregateRating.ratingValue} ({data?.aggregateRating.ratingCount} votes)</p>
            <p className="mb-1"><strong>Duration:</strong> {data?.duration}</p>
            <p className="mb-1"><strong>Released:</strong> {data?.datePublished}</p>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button onClick={handlePress} className="btn btn-primary">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}
