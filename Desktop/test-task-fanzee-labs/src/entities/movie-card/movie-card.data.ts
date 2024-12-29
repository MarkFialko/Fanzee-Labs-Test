import {
  type IMovieBadge,
  type IMovieData,
} from '@/entities/movie-card/movie-card.types';
import star from '@/assets/icons/star.svg';
import film from '@/assets/icons/film.svg';
import clock from '@/assets/icons/clock.svg';
import { BadgeVariant } from '@/shared/UI-kit/app-badge.types';

export const BADGES: IMovieBadge[] = [
  {
    title: (movie: IMovieData) => movie.rating.toFixed(1),
    icon: star,
    variant: (score): BadgeVariant => {
      if (score >= 1 && score < 4) {
        return BadgeVariant.RED;
      }
      if (score >= 4 && score < 7) {
        return BadgeVariant.PURPLE;
      }
      if (score >= 7 && score <= 10) {
        return BadgeVariant.GREEN;
      }

      /*???
      throw new Error(`Unknown score ${score}`);*/
      return BadgeVariant.RED;
    },
  },
  {
    title: (movie: IMovieData) => movie.genre,
    icon: film,
    variant: BadgeVariant.LIGHT_BLUE,
  },
  {
    title: (movie: IMovieData) => movie.duration,
    icon: clock,
    variant: BadgeVariant.PURPLE,
  },
];
