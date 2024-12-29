import type {
  IMovieBadge,
  IMovieData,
} from '@/entities/movie-card/movie-card.types';
import type { IBadge } from '@/shared/UI-kit/app-badge.types';

export const movieBadgeAdapter = (
  badge: IMovieBadge,
  movie: IMovieData,
): IBadge => {
  return {
    title: String(badge.title(movie)),
    icon: badge.icon,
    variant:
      typeof badge.variant === 'function'
        ? badge.variant(movie.rating)
        : badge.variant,
  };
};
