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
        component: () => import('pages/Parliaments/UkrainePage.vue'),
      },
      {
        path: 'gdpamerica2',
        name: 'gdpamerica2',
        component: () => import('pages/GDP/GDP-America2Page.vue'),
      },
      {
        path: 'spain',
        name: 'spain',
        component: () => import('pages/Parliaments/SpainPage.vue'),
      },
      {
        path: 'spainsenate',
        name: 'spainsenate',
        component: () => import('pages/Parliaments/SpainPage2.vue'),
      },
      {
        path: 'gdpamerica',
        name: 'gdpamerica',
        component: () => import('pages/GDP/GDP-AmericaPage.vue'),
      },
      {
        path: 'gdpbrics2',
        name: 'gdpbrics2',
        component: () => import('src/pages/GDP/GDP-BRICS+2Page.vue'),
      },
      {
        path: 'gdpbrics',
        name: 'gdpbrics',
        component: () => import('pages/GDP/GDP-BRICS+Page.vue'),
      },
      {
        path: 'spainand',
        name: 'spainand',
        component: () => import('src/pages/Parliaments/SpainAndPage.vue'),
      },
      {
        path: 'gdpceeac',
        name: 'gdpceeac',
        component: () => import('pages/GDP/GDP-CEEACPage.vue'),
      },
      {
        path: 'gdpceeac2',
        name: 'gdpceeac2',
        component: () => import('pages/GDP/GDP-CEEAC2Page.vue'),
      },
      {
        path: 'gdpceeac3',
        name: 'gdpceeac3',
        component: () => import('pages/GDP/GDP-CEEAC3Page.vue'),
      },
      {
        path: 'gdp_eu',
        name: 'gdp_eu',
        component: () => import('pages/GDP/GDP-EUPage.vue'),
      },
      {
        path: 'gdp_eu1',
        name: 'gdp_eu1',
        component: () => import('pages/GDP/GDP-EU1Page.vue'),
      },
      {
        path: 'gdp_eu2',
        name: 'gdp_eu2',
        component: () => import('pages/GDP/GDP-EU2Page.vue'),
      },
      {
        path: 'eu_parl',
        name: 'eu_parl',
        component: () => import('src/pages/Parliaments/EUparlPage.vue'),
      },
      {
        path: 'ar_parl',
        name: 'ar_parl',
        component: () => import('pages/Parliaments/ArgparlPage.vue'),
      },
      {
        path: 'infamerica',
        name: 'infamerica',
        component: () => import('pages/IR_AVGCPI/inflatAmericaPage.vue'),
      },
      {
        path: 'infamerica2',
        name: 'infamerica2',
        component: () => import('pages/IR_AVGCPI/inflatAmerica2Page.vue'),
      },
      {
        path: 'infaeu',
        name: 'infaeu',
        component: () => import('src/pages/IR_AVGCPI/inflatEUPage.vue'),
      },
      {
        path: 'cpi_venezuela8',
        name: 'cpi_venezuela8',
        component: () => import('pages/CPI/CPIVenezuela8.vue'),
      },
      {
        path: 'cpi_venezuela7',
        name: 'cpi_venezuela7',
        component: () => import('pages/CPI/CPIVenezuela7.vue'),
      },
      {
        path: 'cpi_venezuela6',
        name: 'cpi_venezuela6',
        component: () => import('pages/CPI/CPIVenezuela6.vue'),
      },
      {
        path: 'cpi_venezuela5',
        name: 'cpi_venezuela5',
        component: () => import('pages/CPI/CPIVenezuela5.vue'),
      },
      {
        path: 'cpi_venezuela4',
        name: 'cpi_venezuela4',
        component: () => import('pages/CPI/CPIVenezuela4.vue'),
      },
      {
        path: 'cpi_venezuela3',
        name: 'cpi_venezuela3',
        component: () => import('pages/CPI/CPIVenezuela3.vue'),
      },
      {
        path: 'cpi_venezuela2',
        name: 'cpi_venezuela2',
        component: () => import('pages/CPI/CPIVenezuela2.vue'),
      },
      {
        path: 'cpi_venezuela',
        name: 'cpi_venezuela',
        component: () => import('pages/CPI/CPIVenezuela.vue'),
      },
      {
        path: 'cpi_venezuela9',
        name: 'cpi_venezuela9',
        component: () => import('pages/CPI/CPIVenezuela9.vue'),
      },
      {
        path: 'cpi_venezuela10',
        name: 'cpi_venezuela10',
        component: () => import('pages/CPI/CPIVenezuela10.vue'),
      },
      {
        path: 'cpi_venezuela11',
        name: 'cpi_venezuela11',
        component: () => import('pages/CPI/CPIVenezuela11.vue'),
      },
      {
        path: 'cpi_venezuela12',
        name: 'cpi_venezuela12',
        component: () => import('pages/CPI/CPIVenezuela12.vue'),
      },
      {
        path: 'cpi_venezuela13',
        name: 'cpi_venezuela13',
        component: () => import('pages/CPI/CPIVenezuela13.vue'),
      },
      {
        path: 'cpi_venezuela14',
        name: 'cpi_venezuela14',
        component: () => import('pages/CPI/CPIVenezuela14.vue'),
      },
      {
        path: 'cpi_venezuela15',
        name: 'cpi_venezuela15',
        component: () => import('pages/CPI/CPIVenezuela15.vue'),
      },
      {
        path: 'cpi_venezuela16',
        name: 'cpi_venezuela16',
        component: () => import('pages/CPI/CPIVenezuela16.vue'),
      },
      {
        path: 'cpi_venezuela17',
        name: 'cpi_venezuela17',
        component: () => import('pages/CPI/CPIVenezuela17.vue'),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc',
        name: 'cpi_venezuela_al_y_no_alc',
        component: () => import('pages/CPI/cpi_venezuela_al_y_no_alc.vue'),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc2',
        name: 'cpi_venezuela_al_y_no_alc2',
        component: () => import('pages/CPI/cpi_venezuela_al_y_no_alc2.vue'),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc3',
        name: 'cpi_venezuela_al_y_no_alc3',
        component: () => import('pages/CPI/cpi_venezuela_al_y_no_alc3.vue'),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc4',
        name: 'cpi_venezuela_al_y_no_alc4',
        component: () => import('pages/CPI/cpi_venezuela_al_y_no_alc4.vue'),
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
