import type { BadgeVariant } from '@/shared/UI-kit/app-badge.types';

export interface IMovieData {
  id: number;
  name: string;
  description: string;
  duration: string;
  rating: number;
  poster: string;
  genre: string;
}

export interface IActor {
  name: string;
  imdb_id: string;
}

export interface IMovieDetail extends IMovieData {
  trivia: string[];
  actors: IActor[];
}

export interface IMovieBadge {
  title: (movie: IMovieData) => string | number;
  icon: string;
  variant: ((score: number) => BadgeVariant) | BadgeVariant;
}
