<template>
  <footer class="app-footer">
    <h5 class="app-footer--description">Test Task, 2022</h5>
    <div class="app-footer--info">
      <a class="app-footer--phone" href="tel:518-363-2171">518-363-2171</a>
      <span>91 Park St. Fairhope, AL 36532</span>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.app-footer {
  height: 98px;
  padding: 0 48px;
  background: var(--footer--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-footer--description {
  font-size: 18px;
  font-weight: 700;
}

.app-footer--info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
}

.app-footer--phone {
  text-decoration: underline;
}
</style>
