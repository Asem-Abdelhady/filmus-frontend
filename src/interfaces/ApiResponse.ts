export default interface IApiResponse extends IMovieResponse {
  genre_ids: number[];
  original_title: string;
  original_language: string;
  backdrop_path: string | null;
  popularity: number;
  video: boolean;
}
export interface IMovieData {
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  id: number;
  vote_count: number;
  release_date: string;
}
interface IMovieResponse extends IMovieData {
  _id: string;
}
