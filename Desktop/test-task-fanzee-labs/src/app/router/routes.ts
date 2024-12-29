import type { RouteRecordRaw } from 'vue-router';
import { LayoutType } from '@/layouts/layout.types';
import { Route } from '@/app/router/rotuer.types';

export const routes: RouteRecordRaw[] = [
  {
    name: '/',
    path: '/',
    component: async () => await import('@/pages/main-view/main-view.vue'),
    meta: {
      layout: LayoutType.APP,
    },
  },
  {
    name: Route.MOVIE_DETAIL,
    path: `/${Route.MOVIE_DETAIL}/:id`,
    component: async () =>
      await import('@/pages/movie-detail-view/movie-detail-view.vue'),
    meta: {
      layout: LayoutType.APP,
    },
  },
];
