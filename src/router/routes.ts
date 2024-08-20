import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'ukraine',
        name: 'ukraine',
        component: () => import('pages/UkrainePage.vue'),
      },
      {
        path: 'gdp',
        name: 'gdp',
        component: () => import('pages/GDP1980-1990Page.vue'),
      },
      {
        path: 'spain',
        name: 'spain',
        component: () => import('pages/SpainPage.vue'),
      },
      {
        path: 'spain2',
        name: 'spain2',
        component: () => import('pages/SpainPage2.vue'),
      },
      {
        path: 'gdp2',
        name: 'gdp2',
        component: () => import('pages/GDP1991-2000Page.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
