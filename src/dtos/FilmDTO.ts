export interface FilmDTO {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  genre_ids: [];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
