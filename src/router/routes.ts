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
        component: () => import('pages/CPI/Venezuela/CPIVenezuela8.vue'),
      },
      {
        path: 'cpi_venezuela7',
        name: 'cpi_venezuela7',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela7.vue'),
      },
      {
        path: 'cpi_venezuela6',
        name: 'cpi_venezuela6',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela6.vue'),
      },
      {
        path: 'cpi_venezuela5',
        name: 'cpi_venezuela5',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela5.vue'),
      },
      {
        path: 'cpi_venezuela4',
        name: 'cpi_venezuela4',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela4.vue'),
      },
      {
        path: 'cpi_venezuela3',
        name: 'cpi_venezuela3',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela3.vue'),
      },
      {
        path: 'cpi_venezuela2',
        name: 'cpi_venezuela2',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela2.vue'),
      },
      {
        path: 'cpi_venezuela',
        name: 'cpi_venezuela',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela.vue'),
      },
      {
        path: 'cpi_venezuela9',
        name: 'cpi_venezuela9',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela9.vue'),
      },
      {
        path: 'cpi_venezuela10',
        name: 'cpi_venezuela10',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela10.vue'),
      },
      {
        path: 'cpi_venezuela11',
        name: 'cpi_venezuela11',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela11.vue'),
      },
      {
        path: 'cpi_venezuela12',
        name: 'cpi_venezuela12',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela12.vue'),
      },
      {
        path: 'cpi_venezuela13',
        name: 'cpi_venezuela13',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela13.vue'),
      },
      {
        path: 'cpi_venezuela14',
        name: 'cpi_venezuela14',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela14.vue'),
      },
      {
        path: 'cpi_venezuela15',
        name: 'cpi_venezuela15',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela15.vue'),
      },
      {
        path: 'cpi_venezuela16',
        name: 'cpi_venezuela16',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela16.vue'),
      },
      {
        path: 'cpi_venezuela17',
        name: 'cpi_venezuela17',
        component: () => import('pages/CPI/Venezuela/CPIVenezuela17.vue'),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc',
        name: 'cpi_venezuela_al_y_no_alc',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc2',
        name: 'cpi_venezuela_al_y_no_alc2',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc2.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc3',
        name: 'cpi_venezuela_al_y_no_alc3',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc3.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc4',
        name: 'cpi_venezuela_al_y_no_alc4',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc4.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc5',
        name: 'cpi_venezuela_al_y_no_alc5',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc5.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc6',
        name: 'cpi_venezuela_al_y_no_alc6',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc6.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc7',
        name: 'cpi_venezuela_al_y_no_alc7',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc7.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc8',
        name: 'cpi_venezuela_al_y_no_alc8',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc8.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc9',
        name: 'cpi_venezuela_al_y_no_alc9',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc9.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc10',
        name: 'cpi_venezuela_al_y_no_alc10',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc10.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc4',
        name: 'cpi_venezuela_al_y_no_alc4',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/cpi_venezuela_al_y_no_alc4.vue'
          ),
      },
      {
        path: 'venezueladebt',
        name: 'venezueladebt',
        component: () => import('pages/Gross Debt/Venezueladebt.vue'),
      },
      {
        path: 'venezueladebt2',
        name: 'venezueladebt2',
        component: () => import('pages/Gross Debt/Venezueladebt2.vue'),
      },
      {
        path: 'venezueladebt3',
        name: 'venezueladebt3',
        component: () => import('pages/Gross Debt/Venezueladebt3.vue'),
      },
      {
        path: 'venezueladebt4',
        name: 'venezueladebt4',
        component: () => import('pages/Gross Debt/Venezueladebt4.vue'),
      },
      {
        path: 'gdpamericacp',
        name: 'gdpamericacp',
        component: () => import('pages/GDP/GDP-CP-AmericaPage.vue'),
      },
      {
        path: 'venezueladember',
        name: 'venezueladember',
        component: () => import('pages/Bertelsmann/Venezueladember.vue'),
      },
      {
        path: 'venezuelagovber',
        name: 'venezuelagovber',
        component: () => import('pages/Bertelsmann/Venezuelagovber.vue'),
      },
      {
        path: 'venezuelaecober',
        name: 'venezuelaecober',
        component: () => import('pages/Bertelsmann/Venezuelaecober.vue'),
      },
      {
        path: 'cubadember',
        name: 'cubadember',
        component: () => import('pages/Bertelsmann/Cubadember.vue'),
      },
      {
        path: 'cubagovber',
        name: 'cubagovber',
        component: () => import('pages/Bertelsmann/Cubagovber.vue'),
      },
      {
        path: 'cubaecoer',
        name: 'cubaecober',
        component: () => import('pages/Bertelsmann/Cubaecober.vue'),
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
