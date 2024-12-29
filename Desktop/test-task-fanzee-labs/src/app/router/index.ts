import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/app/router/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (!to.name) {
    return next({ name: '/' });
  }

  next();
});

export default router;
