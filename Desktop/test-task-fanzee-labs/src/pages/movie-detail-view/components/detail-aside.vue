<template>
  <aside class="detail-aside">
    <h1 class="detail-aside--title">{{ movie.name }}</h1>
    <img :alt="movie.name" :src="movie.poster" class="detail-aside--poster" />
    <div class="detail-aside--badges">
      <movie-badge
        v-for="badge in BADGES"
        :key="badge.title"
        :badge="movieBadgeAdapter(badge, movie)"
      />
    </div>
  </aside>
</template>

<script lang="ts" setup>
import type { IMovieData } from '@/entities/movie-card/movie-card.types';
import { BADGES } from '@/entities/movie-card/movie-card.data';
import { movieBadgeAdapter } from '@/entities/movie-card/movie-card.utils';
import MovieBadge from '@/entities/movie-card/components/movie-badge.vue';

interface Props {
  movie: IMovieData;
}

defineProps<Props>();
</script>

<style scoped>
.detail-aside {
  position: sticky;
  top: calc(var(--header-height) + 10px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 320px;

  @media (max-width: 768px) {
    position: static;
  }
}

.detail-aside--title {
  font-size: 32px;
  font-weight: 700;
}

.detail-aside--badges {
  display: flex;
  align-items: center;
  gap: 8px;
}

.detail-aside--poster {
  border-radius: 8px;
  object-fit: cover;
}
</style>
