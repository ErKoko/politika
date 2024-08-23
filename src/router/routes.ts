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
        path: 'gdpamerica2',
        name: 'gdpamerica2',
        component: () => import('pages/GDP-America2Page.vue'),
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
        path: 'gdpamerica',
        name: 'gdpamerica',
        component: () => import('pages/GDP-AmericaPage.vue'),
      },
      {
        path: 'gdpbrics2',
        name: 'gdpbrics2',
        component: () => import('pages/GDP-BRICS+2Page.vue'),
      },
      {
        path: 'gdpbrics',
        name: 'gdpbrics',
        component: () => import('pages/GDP-BRICS+Page.vue'),
      },
      {
        path: 'spainand',
        name: 'spainand',
        component: () => import('pages/SpainAndPage.vue'),
      },
      {
        path: 'ceeac',
        name: 'ceeac',
        component: () => import('pages/GDP-CEEACPage.vue'),
      },
      {
        path: 'gdp_eu',
        name: 'gdp_eu',
        component: () => import('pages/GDP-EUPage.vue'),
      },
      {
        path: 'gdp_eu2',
        name: 'gdp_eu2',
        component: () => import('pages/GDP-EU2Page.vue'),
      },
      {
        path: 'eu_parl',
        name: 'eu_parl',
        component: () => import('pages/EUparlPage.vue'),
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
