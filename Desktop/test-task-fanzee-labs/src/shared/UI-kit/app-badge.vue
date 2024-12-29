<template>
  <span :class="[`app-badge--${variant}`]" class="app-badge">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import type { BadgeVariant } from '@/shared/UI-kit/app-badge.types';

interface Props {
  variant: BadgeVariant;
}

defineProps<Props>();
</script>

<style scoped>
.app-badge {
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 2px 6px;
  height: 17px;
  gap: 2px;
  font-size: 11px;
  font-weight: 500;
}

.app-badge--green {
  background: var(--app-badge-green);
}

.app-badge--purple {
  background: var(--app-badge-purple);
}

.app-badge--red {
  background: var(--app-badge-red);
}

.app-badge--light-blue {
  background: var(--app-badge-light-blue);
}
</style>
