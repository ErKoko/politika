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
        path: 'spainsenate',
        name: 'spainsenate',
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
        path: 'gdpceeac',
        name: 'gdpceeac',
        component: () => import('pages/GDP-CEEACPage.vue'),
      },
      {
        path: 'gdpceeac2',
        name: 'gdpceeac2',
        component: () => import('pages/GDP-CEEAC2Page.vue'),
      },
      {
        path: 'gdpceeac3',
        name: 'gdpceeac3',
        component: () => import('pages/GDP-CEEAC3Page.vue'),
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
      {
        path: 'ar_parl',
        name: 'ar_parl',
        component: () => import('pages/ArgparlPage.vue'),
      },
      {
        path: 'infamerica',
        name: 'infamerica',
        component: () => import('pages/inflatAmericaPage.vue'),
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
