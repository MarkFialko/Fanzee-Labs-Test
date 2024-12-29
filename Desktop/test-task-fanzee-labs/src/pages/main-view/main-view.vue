<template>
  <div class="main-view">
    <template v-if="isLoading">
      <movie-card-skeleton v-for="i in MOVIES_CARD_SKELETON_LENGTH" :key="i" />
    </template>
    <movie-card v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MovieCardSkeleton from '@/entities/movie-card/movie-card-skeleton.vue';
import { MOVIES_CARD_SKELETON_LENGTH } from '@/pages/main-view/main-view.data';
import { MOCK_API_URL } from '@/app/api/api.constants';
import type { IMovieData } from '@/entities/movie-card/movie-card.types';
import MovieCard from '@/entities/movie-card/movie-card.vue';
import { fetchJson } from '@/app/api/api.types';

const isLoading = ref(false);

const movies = ref<IMovieData[]>([]);

const getMoviesList = async () => {
  try {
    isLoading.value = true;

    const movieData = await fetchJson<{ items: IMovieData[] }>(
      `${MOCK_API_URL}/movie-list.json`,
    );

    movies.value = movieData.items;
  } catch (e) {
    console.log(e, 'error');
  } finally {
    isLoading.value = false;
  }
};

getMoviesList();
</script>

<style scoped>
.main-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  padding: 32px 48px;
}
</style>
