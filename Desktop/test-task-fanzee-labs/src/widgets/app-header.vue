<template>
  <header class="app-header">
    <h1 class="app-header--logo">
      <router-link to="/"> Test Task</router-link>
    </h1>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
.app-header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: var(--header--primary-color);
  display: flex;
  align-items: center;
  padding: 0 48px;
  box-shadow: 0 4px 4px #000000;
}

.app-header--logo {
  font-size: 32px;
  font-weight: 700;
}
</style>
