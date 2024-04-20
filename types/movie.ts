import {
  MovieData as SdkMovieData,
  SearchResponse as SdkSearchResponse,
  SearchQuery as SdkSearchQuery,
  Person as SdkPerson,
  AggregateRating as SdkAggregateRating,
  VideoObject as SdkVideoObject,
  ImageObject as SdkImageObject,
  Movie as SdkMovie,
}  from '../sdk/src/types/movie'

export interface MovieData extends SdkMovieData {} 

export interface SearchResponse extends SdkSearchResponse {}

export interface SearchQuery extends SdkSearchQuery {}

interface Person extends SdkPerson {}

interface AggregateRating extends SdkAggregateRating {}

interface VideoObject extends SdkVideoObject {}

interface ImageObject extends SdkImageObject {}

export interface Movie extends SdkMovie {}

export interface MovieIbmdData {
  short: Movie
  imdbId: string
}

interface Markdown {
  plainText: string
  __typename: 'Markdown'
}

interface ReviewText {
  originalText: Markdown
  __typename: 'ReviewText'
}

interface ReviewSummary {
  originalText: string
  __typename: 'ReviewSummary'
}

interface UserProfile {
  nickName: string
  __typename: 'UserProfile'
}

interface Review {
  author: UserProfile
  summary: ReviewSummary
  text: ReviewText
  authorRating: number
  submissionDate: string
  __typename: 'Review'
}

interface ReviewEdge {
  node: Review
  __typename: 'ReviewEdge'
}

interface ReviewsConnection {
  edges: ReviewEdge[]
  __typename: 'ReviewsConnection'
}

interface MovieDetailsResponse {
  featuredReviews: ReviewsConnection
  __typename: 'Title'
}

