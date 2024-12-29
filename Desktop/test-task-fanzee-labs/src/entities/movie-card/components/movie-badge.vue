<template>
  <app-badge :variant="badge.variant">
    <img :alt="badge.title" :src="badge.icon" class="movie-card--badge" />
    {{ badge.title }}
  </app-badge>
</template>

<script lang="ts" setup>
import AppBadge from '@/shared/UI-kit/app-badge.vue';
import type { IBadge } from '@/shared/UI-kit/app-badge.types';

interface Props {
  badge: IBadge;
}

defineProps<Props>();
</script>

<style scoped>
.movie-card--badge {
  height: 8px;
  width: 8px;
}
</style>
