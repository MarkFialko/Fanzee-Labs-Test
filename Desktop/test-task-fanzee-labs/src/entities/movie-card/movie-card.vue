<template>
  <router-link
    :to="`/${Route.MOVIE_DETAIL}/${movie.id}`"
    class="movie-card--link"
  >
    <article class="movie-card">
      <img :alt="movie.name" :src="movie.poster" class="movie-card--poster" />
      <h2 class="movie-card--name">{{ movie.name }}</h2>
      <span class="movie-card--description">{{ movie.description }}</span>

      <div class="movie-card--badges">
        <movie-badge
          v-for="badge in BADGES"
          :key="badge.title"
          :badge="movieBadgeAdapter(badge, movie)"
        />
      </div>
    </article>
  </router-link>
</template>

<script lang="ts" setup>
import type { IMovieData } from '@/entities/movie-card/movie-card.types';
import { BADGES } from '@/entities/movie-card/movie-card.data';
import { Route } from '@/app/router/rotuer.types';
import MovieBadge from '@/entities/movie-card/components/movie-badge.vue';
import { movieBadgeAdapter } from '@/entities/movie-card/movie-card.utils';

interface Props {
  movie: IMovieData;
}

defineProps<Props>();
</script>

<style scoped>
.movie-card {
  padding: 12px;
  border-radius: 8px;
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 3px solid var(--primary-color);
  transition-duration: 0.2s;
}

.movie-card:hover {
  box-shadow: 8px 8px 0 0 var(--accent-color);
}

.movie-card--link {
  border-radius: 8px;
}

.movie-card--link:focus {
  outline: none;

  .movie-card {
    border: 3px solid var(--accent-color);
  }
}

.movie-card--poster {
  object-fit: cover;
  height: 180px;
  border-radius: 8px;
}

.movie-card--name {
  font-size: 28px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.movie-card--description {
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.movie-card--badges {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
