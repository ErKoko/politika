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
        component: () => import('pages/Parliaments/UkrP.vue'),
      },
      {
        path: 'gdpamerica2',
        name: 'gdpamerica2',
        component: () => import('pages/GDP/America2Page.vue'),
      },
      {
        path: 'spain',
        name: 'spain',
        component: () => import('pages/Parliaments/SpainP.vue'),
      },
      {
        path: 'spainsenate',
        name: 'spainsenate',
        component: () => import('pages/Parliaments/SpainSenate.vue'),
      },
      {
        path: 'gdpamerica',
        name: 'gdpamerica',
        component: () => import('pages/GDP/AmericaPage.vue'),
      },
      {
        path: 'gdpbrics2',
        name: 'gdpbrics2',
        component: () => import('pages/GDP/BRICS+2Page.vue'),
      },
      {
        path: 'gdpbrics',
        name: 'gdpbrics',
        component: () => import('pages/GDP/BRICS+Page.vue'),
      },
      {
        path: 'spainand',
        name: 'spainand',
        component: () => import('pages/Parliaments/AndalusiaP.vue'),
      },
      {
        path: 'gdpceeac',
        name: 'gdpceeac',
        component: () => import('pages/GDP/CEEACPage.vue'),
      },
      {
        path: 'gdpceeac2',
        name: 'gdpceeac2',
        component: () => import('pages/GDP/CEEAC2Page.vue'),
      },
      {
        path: 'gdpceeac3',
        name: 'gdpceeac3',
        component: () => import('pages/GDP/CEEAC3Page.vue'),
      },
      {
        path: 'gdp_eu',
        name: 'gdp_eu',
        component: () => import('pages/GDP/EUPage.vue'),
      },
      {
        path: 'gdp_eu1',
        name: 'gdp_eu1',
        component: () => import('pages/GDP/EU1Page.vue'),
      },
      {
        path: 'gdp_eu2',
        name: 'gdp_eu2',
        component: () => import('pages/GDP/EU2Page.vue'),
      },
      {
        path: 'eu_parl',
        name: 'eu_parl',
        component: () => import('pages/Parliaments/EUP.vue'),
      },
      {
        path: 'ar_parl',
        name: 'ar_parl',
        component: () => import('pages/Parliaments/ArgP.vue'),
      },
      {
        path: 'infamerica',
        name: 'infamerica',
        component: () => import('pages/Inflation/IAmericaP.vue'),
      },
      {
        path: 'infamerica2',
        name: 'infamerica2',
        component: () => import('pages/Inflation/IAmerica2P.vue'),
      },
      {
        path: 'infaeu',
        name: 'infaeu',
        component: () => import('pages/Inflation/IEUP.vue'),
      },
      {
        path: 'cpi_venezuela8',
        name: 'cpi_venezuela8',
        component: () => import('pages/CPI/Venezuela/Venezuela8.vue'),
      },
      {
        path: 'cpi_venezuela7',
        name: 'cpi_venezuela7',
        component: () => import('pages/CPI/Venezuela/Venezuela7.vue'),
      },
      {
        path: 'cpi_venezuela6',
        name: 'cpi_venezuela6',
        component: () => import('pages/CPI/Venezuela/Venezuela6.vue'),
      },
      {
        path: 'cpi_venezuela5',
        name: 'cpi_venezuela5',
        component: () => import('pages/CPI/Venezuela/Venezuela5.vue'),
      },
      {
        path: 'cpi_venezuela4',
        name: 'cpi_venezuela4',
        component: () => import('pages/CPI/Venezuela/Venezuela4.vue'),
      },
      {
        path: 'cpi_venezuela3',
        name: 'cpi_venezuela3',
        component: () => import('pages/CPI/Venezuela/Venezuela3.vue'),
      },
      {
        path: 'cpi_venezuela2',
        name: 'cpi_venezuela2',
        component: () => import('pages/CPI/Venezuela/Venezuela2.vue'),
      },
      {
        path: 'cpi_venezuela',
        name: 'cpi_venezuela',
        component: () => import('pages/CPI/Venezuela/Venezuela.vue'),
      },
      {
        path: 'cpi_venezuela1-2',
        name: 'cpi_venezuela1-2',
        component: () => import('pages/CPI/Venezuela/Venezuela1-2.vue'),
      },
      {
        path: 'cpi_venezuela9',
        name: 'cpi_venezuela9',
        component: () => import('pages/CPI/Venezuela/Venezuela9.vue'),
      },
      {
        path: 'cpi_venezuela10',
        name: 'cpi_venezuela10',
        component: () => import('pages/CPI/Venezuela/Venezuela10.vue'),
      },
      {
        path: 'cpi_venezuela11',
        name: 'cpi_venezuela11',
        component: () => import('pages/CPI/Venezuela/Venezuela11.vue'),
      },
      {
        path: 'cpi_venezuela12',
        name: 'cpi_venezuela12',
        component: () => import('pages/CPI/Venezuela/Venezuela12.vue'),
      },
      {
        path: 'cpi_venezuela13',
        name: 'cpi_venezuela13',
        component: () => import('pages/CPI/Venezuela/Venezuela13.vue'),
      },
      {
        path: 'cpi_venezuela14',
        name: 'cpi_venezuela14',
        component: () => import('pages/CPI/Venezuela/Venezuela14.vue'),
      },
      {
        path: 'cpi_venezuela15',
        name: 'cpi_venezuela15',
        component: () => import('pages/CPI/Venezuela/Venezuela15.vue'),
      },
      {
        path: 'cpi_venezuela16',
        name: 'cpi_venezuela16',
        component: () => import('pages/CPI/Venezuela/Venezuela16.vue'),
      },
      {
        path: 'cpi_venezuela17',
        name: 'cpi_venezuela17',
        component: () => import('pages/CPI/Venezuela/Venezuela17.vue'),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc',
        name: 'cpi_venezuela_al_y_no_alc',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc2',
        name: 'cpi_venezuela_al_y_no_alc2',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc2.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc3',
        name: 'cpi_venezuela_al_y_no_alc3',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc3.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc4',
        name: 'cpi_venezuela_al_y_no_alc4',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc4.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc5',
        name: 'cpi_venezuela_al_y_no_alc5',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc5.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc6',
        name: 'cpi_venezuela_al_y_no_alc6',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc6.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc7',
        name: 'cpi_venezuela_al_y_no_alc7',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc7.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc8',
        name: 'cpi_venezuela_al_y_no_alc8',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc8.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc9',
        name: 'cpi_venezuela_al_y_no_alc9',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc9.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc10',
        name: 'cpi_venezuela_al_y_no_alc10',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc10.vue'
          ),
      },
      {
        path: 'cpi_venezuela_al_y_no_alc4',
        name: 'cpi_venezuela_al_y_no_alc4',
        component: () =>
          import(
            'pages/CPI/alimentos y no alcoholicas/venezuela_al_y_no_alc4.vue'
          ),
      },
      {
        path: 'venezueladebt',
        name: 'venezueladebt',
        component: () => import('pages/Gross Debt/Venezuela.vue'),
      },
      {
        path: 'venezueladebt2',
        name: 'venezueladebt2',
        component: () => import('pages/Gross Debt/Venezuela2.vue'),
      },
      {
        path: 'venezueladebt3',
        name: 'venezueladebt3',
        component: () => import('pages/Gross Debt/Venezuela3.vue'),
      },
      {
        path: 'venezueladebt4',
        name: 'venezueladebt4',
        component: () => import('pages/Gross Debt/Venezuela4.vue'),
      },
      {
        path: 'gdpamericacp',
        name: 'gdpamericacp',
        component: () => import('pages/GDP/CP-AmericaPage.vue'),
      },
      {
        path: 'venezueladember',
        name: 'venezueladember',
        component: () => import('pages/Bertelsmann index/Dem index/Venezuela.vue'),
      },
      {
        path: 'venezuelagovber',
        name: 'venezuelagovber',
        component: () => import('pages/Bertelsmann index/Gov index/Venezuelagovber.vue'),
      },
      {
        path: 'venezuelaecober',
        name: 'venezuelaecober',
        component: () => import('pages/Bertelsmann index/Eco index/Venezuelaecober.vue'),
      },
      {
        path: 'cubadember',
        name: 'cubadember',
        component: () => import('pages/Bertelsmann index/Dem index/Cuba.vue'),
      },
      {
        path: 'senegal',
        name: 'senegal',
        component: () => import('pages/Bertelsmann index/Dem index/Senegal.vue'),
      },
      {
        path: 'cubagovber',
        name: 'cubagovber',
        component: () => import('pages/Bertelsmann index/Gov index/Cubagovber.vue'),
      },
      {
        path: 'cubaecober',
        name: 'cubaecober',
        component: () => import('pages/Bertelsmann index/Eco index/Cubaecober.vue'),
      },
      {
        path: 'senegalecober',
        name: 'senegalecober',
        component: () => import('pages/Bertelsmann index/Eco index/Senegalecober.vue'),
      },
      {
        path: 'senegalgovober',
        name: 'senegalgovber',
        component: () => import('pages/Bertelsmann index/Gov index/Senegalgovber.vue'),
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
