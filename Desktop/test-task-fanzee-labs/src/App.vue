<script lang="ts" setup>
import AppLayout from '@/layouts/app-layout.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { LayoutType } from '@/layouts/layout.types';

const route = useRoute();

const currentLayout = computed(() => {
  switch (route.meta.layout) {
    case LayoutType.APP:
      return AppLayout;
    default:
      return AppLayout;
  }
});
</script>

<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>

<style scoped></style>
