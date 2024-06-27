import { createRouter, createWebHashHistory } from 'vue-router';
import { ROUTERS_PATH } from '@/constants/router.js';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTERS_PATH.HOME,
      name: 'Home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: ROUTERS_PATH.ABOUT,
      name: 'About',
      component: () => import('@/pages/AboutPage.vue')
    },
    {
      path: ROUTERS_PATH.ALIAS,
      name: 'ItemAlias',
      component: () => import('@/pages/ItemAlias.vue')
    },
    {
      path: ROUTERS_PATH.NOT_FOUND,
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
});

export default router;
