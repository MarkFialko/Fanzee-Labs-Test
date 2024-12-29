<template>
  <div class="detail-info">
    <h2 class="detail-info--title">Description</h2>
    <p class="detail-info--description">
      {{ movie.description }}
    </p>
    <h2 class="detail-info--title">Trivia</h2>
    <ul class="detail-info--trivia">
      <li v-for="(item, index) in movie.trivia" :key="index">
        {{ item }}
      </li>
    </ul>
    <h2 class="detail-info--title">Actors</h2>
    <ul class="detail-info--actors">
      <li v-for="(item, index) in movie.actors" :key="index">
        <a class="detail-info--actor" href="">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { IMovieDetail } from '@/entities/movie-card/movie-card.types';

interface Props {
  movie: IMovieDetail;
}

defineProps<Props>();
</script>

<style scoped>
.detail-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.detail-info--title {
  font-size: 32px;
  font-weight: 700;
}

.detail-info--description {
  font-size: 14px;
  font-weight: 500;
}

.detail-info--trivia,
.detail-info--actors {
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  list-style: inside;
  gap: 4px;
}

.detail-info--actor {
  text-decoration: underline;
}
</style>
