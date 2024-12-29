import 'vue-router';
import type { LayoutType } from '@/layouts/layout.types';

export {};

declare module 'vue-router' {
  interface RouteMeta {
    layout: LayoutType;
  }
}
