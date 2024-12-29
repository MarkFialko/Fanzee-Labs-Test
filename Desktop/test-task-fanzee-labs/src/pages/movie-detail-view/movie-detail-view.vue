<template>
  <div class="movie-detail-view">
    <template v-if="isLoading"> Загрузка...</template>
    <template v-else>
      <div v-if="movieDetail" class="movie-detail-view--content">
        <detail-aside :movie="movieDetail" />
        <detail-info :movie="movieDetail" />
      </div>
      <span v-else>Ничего не найдено :(</span>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { MOCK_API_URL } from '@/app/api/api.constants';
import type { IMovieDetail } from '@/entities/movie-card/movie-card.types';
import { fetchJson } from '@/app/api/api.types';
import DetailAside from '@/pages/movie-detail-view/components/detail-aside.vue';
import DetailInfo from '@/pages/movie-detail-view/components/detail-info.vue';

const route = useRoute();
const movieId = Number(route.params.id);

const isLoading = ref(false);

const movieDetail = ref<IMovieDetail>();

const getMovieData = async () => {
  try {
    isLoading.value = true;
    const detail = await fetchJson<IMovieDetail>(`${MOCK_API_URL}/detail.json`);
    movieDetail.value = detail.id === movieId ? detail : undefined;
  } catch (e) {
    console.log(e, 'error');
  } finally {
    isLoading.value = false;
  }
};

getMovieData();
</script>

<style scoped>
.movie-detail-view {
  display: flex;
  flex-direction: row;
  padding: 24px 48px 42px 48px;
}

.movie-detail-view--content {
  display: flex;
  align-items: flex-start;
  gap: 64px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
