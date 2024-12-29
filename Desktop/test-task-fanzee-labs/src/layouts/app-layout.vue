<template>
  <div class="app-layout">
    <app-header />
    <main class="app-layout--main">
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts" setup>
import AppFooter from '@/widgets/app-footer.vue';
import AppHeader from '@/widgets/app-header.vue';
</script>

<style scoped>
.app-layout {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.app-layout--main {
  flex: 1 1 auto;
  margin-top: var(--header-height);
}
</style>
