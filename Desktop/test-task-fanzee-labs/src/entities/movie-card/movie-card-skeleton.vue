<template>
  <div class="movie-card-skeleton"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.movie-card-skeleton {
  background: var(--primary-color);
  border-radius: 8px;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  display: flex;
  flex-direction: column;
  height: 280px;
}
</style>
