<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <!-- {{ process.env.APP_NAME }} -->
          Politiká
        </q-toolbar-title>
        <q-space></q-space>
        <q-btn flat icon="dark_mode" round @click="$q.dark.toggle"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item
          class="bg-grey-4"
          clickable
          @click="openURL('https://github.com/ErKoko/politika')"
        >
          <q-item-section avatar>
            <q-avatar>
              <img
                src="https://avatars.githubusercontent.com/u/178798189?v=4"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <!-- {{ process.env.APP_AUTHOR }} -->
              Adrián de Haro
            </q-item-label>
            <q-item-label caption>
              <!-- Versión {{ process.env.APP_VERSION }}, licencia {{ process.env.license }} -->
              Versión 0.0.2, licencia AGPL-3.0-only
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-tree
          ref="tree"
          :nodes="simple"
          node-key="label"
          v-model:selected="selected"
          selected-color="primary"
          dense
        >
          <template v-slot:default-body="prop">
            <div v-if="prop.node.caption" class="text-caption">
              {{ prop.node.caption }}
            </div>
          </template>
        </q-tree>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { type QTree, openURL } from 'quasar';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'MainLayout',
});

const router = useRouter();
const leftDrawerOpen = ref(false);
const selected = ref('');
const tree = ref<QTree>();

watch(selected, (value) => {
  const n = tree.value?.getNodeByKey(value);
  router.push({ name: n.path });
});

const simple = [
  {
    label: 'Parlamentos',
    caption: 'Reparto de diputados',
    icon: 'folder',
    children: [
      {
        label: 'Ucrania',
        icon: 'folder',
        children: [
          {
            label: 'Verkhovna Rada of Ukraine',
            caption: '2024',
            icon: 'pie_chart',
            path: 'ukraine',
          },
        ],
      },
      {
        label: 'España',
        icon: 'folder',
        children: [
          {
            label: 'Congreso de los diputados',
            caption: '2024',
            icon: 'pie_chart',
            path: 'spain',
          },
          {
            label: 'Senado de España',
            caption: '2024',
            icon: 'pie_chart',
            path: 'spainsenate',
          },
          {
            label: 'Parlamento de Andalucía',
            caption: '2024',
            icon: 'pie_chart',
            path: 'spainand',
          },
          {
            label: 'Parlamento Europeo',
            caption: '2024',
            icon: 'pie_chart',
            path: 'eu_parl',
          },
        ],
      },
      {
        label: 'Argentina',
        icon: 'folder',
        children: [
          {
            label: 'Parlamento de Argentina',
            caption: '2024',
            icon: 'pie_chart',
            path: 'ar_parl',
          },
        ],
      },
    ],
  },
  {
    label: 'GDP',
    caption: 'Producto Interior Bruto',
    icon: 'folder',
    children: [
      {
        label: 'Real GDP',
        caption: 'PIB real %',
        icon: 'folder',
        children: [
          {
            label: 'Americas',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: 'gdpamerica',
          },
          {
            label: 'Americas2',
            caption: '1991-2000',
            icon: 'bar_chart',
            path: 'gdpamerica2',
          },
        ],
      },
      {
        label: 'GDP current prices',
        caption: 'PIB en billones de dólares',
        icon: 'folder',
        children: [
          {
            label: 'AmericasCP',
            caption: '1991-2000',
            icon: 'bar_chart',
            path: 'gdpamericacp',
          },
        ],
      },
      {
        label: 'Alliances',
        caption: 'PIB real %',
        icon: 'folder',
        children: [
          {
            label: 'CEEAC',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: 'gdpceeac',
          },
          {
            label: 'CEEAC2',
            caption: '1991-2000',
            icon: 'bar_chart',
            path: 'gdpceeac2',
          },
          {
            label: 'CEEAC3',
            caption: '1991-2000',
            icon: 'bar_chart',
            path: 'gdpceeac3',
          },
          {
            label: 'EU',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: 'gdp_eu',
          },
          {
            label: 'EU1',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: 'gdp_eu1',
          },
          {
            label: 'EU2',
            caption: '1991-2000',
            icon: 'bar_chart',
            path: 'gdp_eu2',
          },
          {
            label: 'BRICS+',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: 'gdpbrics',
          },
          {
            label: 'BRICS+2',
            caption: '1991-2000',
            icon: 'bar_chart',
            path: 'gdpbrics2',
          },
        ],
      },
    ],
  },
  {
    label: 'Inflation rate',
    caption: 'average consumer prices ',
    icon: 'folder',
    children: [
      {
        label: 'Inflation',
        caption: '',
        icon: 'folder',
        children: [
          {
            label: 'Americas inf',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: 'infamerica',
          },
          {
            label: 'Americas inf2',
            caption: '1991-2000',
            icon: 'bar_chart',
            path: 'infamerica2',
          },
        ],
      },
      {
        label: 'Alliances',
        caption: '',
        icon: 'folder',
        children: [
          {
            label: '',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: '',
          },
          {
            label: '',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: '',
          },
          {
            label: '',
            caption: '1991-2000',
            icon: 'bar_chart',
            path: '',
          },
          {
            label: '',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: '',
          },
          {
            label: '',
            caption: '1991-2000',
            icon: 'bar_chart',
            path: '',
          },
        ],
      },
    ],
  },
  {
    label: 'CPI',
    caption: 'Consumer Price Index',
    icon: 'folder',
    children: [
      {
        label: 'INPC en base a indices y variaciones',
        caption: 'diciembre 2007',
        icon: 'folder',
        children: [
          {
            label: 'CPI Venezuela8',
            caption: '2015',
            icon: 'pie_chart',
            path: 'cpi_venezuela8',
          },
          {
            label: 'CPI Venezuela7',
            caption: '2014',
            icon: 'pie_chart',
            path: 'cpi_venezuela7',
          },
          {
            label: 'CPI Venezuela6',
            caption: '2013',
            icon: 'pie_chart',
            path: 'cpi_venezuela6',
          },
          {
            label: 'CPI Venezuela5',
            caption: '2012',
            icon: 'pie_chart',
            path: 'cpi_venezuela5',
          },
          {
            label: 'CPI Venezuela4',
            caption: '2011',
            icon: 'pie_chart',
            path: 'cpi_venezuela4',
          },
          {
            label: 'CPI Venezuela3',
            caption: '2010',
            icon: 'pie_chart',
            path: 'cpi_venezuela3',
          },
          {
            label: 'CPI Venezuela2',
            caption: '2009',
            icon: 'pie_chart',
            path: 'cpi_venezuela2',
          },
          {
            label: 'CPI Venezuela',
            caption: '2008',
            icon: 'pie_chart',
            path: 'cpi_venezuela',
          },
          {
            label: 'CPI Venezuela9',
            caption: '2016',
            icon: 'pie_chart',
            path: 'cpi_venezuela9',
          },
          {
            label: 'CPI Venezuela10',
            caption: '2017',
            icon: 'pie_chart',
            path: 'cpi_venezuela10',
          },
          {
            label: 'CPI Venezuela11',
            caption: '2018',
            icon: 'pie_chart',
            path: 'cpi_venezuela11',
          },
          {
            label: 'CPI Venezuela12',
            caption: '2019',
            icon: 'pie_chart',
            path: 'cpi_venezuela12',
          },
          {
            label: 'CPI Venezuela13',
            caption: '2020',
            icon: 'pie_chart',
            path: 'cpi_venezuela13',
          },
          {
            label: 'CPI Venezuela14',
            caption: '2021',
            icon: 'pie_chart',
            path: 'cpi_venezuela14',
          },
          {
            label: 'CPI Venezuela15',
            caption: '2022',
            icon: 'pie_chart',
            path: 'cpi_venezuela15',
          },
          {
            label: 'CPI Venezuela16',
            caption: '2023',
            icon: 'pie_chart',
            path: 'cpi_venezuela16',
          },
          {
            label: 'CPI Venezuela17',
            caption: '2024',
            icon: 'pie_chart',
            path: 'cpi_venezuela17',
          },
        ],
      },
      {
        label: 'INPC en base a indices por artículo',
        caption: 'diciembre 2007 año base',
        icon: 'folder',
        children: [
          {
            label: 'CPI Venezuela_al_y_no_alc',
            caption: '2014',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc2',
            caption: '2015',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc2',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc3',
            caption: '2016',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc3',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc4',
            caption: '2017',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc4',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc5',
            caption: '2018',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc5',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc6',
            caption: '2019',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc6',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc7',
            caption: '2020',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc7',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc8',
            caption: '2021',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc8',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc9',
            caption: '2022',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc9',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc10',
            caption: '2023',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc10',
          },
          {
            label: 'CPI Venezuela_al_y_no_alc11',
            caption: '2024',
            icon: 'pie_chart',
            path: 'cpi_venezuela_al_y_no_alc11',
          },
          {
            label: '',
            caption: '2024',
            icon: 'pie_chart',
            path: '',
          },
        ],
      },
      {
        label: 'Gross Debt',
        caption: '',
        icon: 'folder',
        children: [
          {
            label: 'Venezueladebt',
            caption: '1998-1999',
            icon: 'pie_chart',
            path: 'venezueladebt',
          },
          {
            label: 'Venezueladebt2',
            caption: '2000-2010',
            icon: 'pie_chart',
            path: 'venezueladebt2',
          },
          {
            label: 'Venezueladebt3',
            caption: '2011-2020',
            icon: 'pie_chart',
            path: 'venezueladebt3',
          },
          {
            label: 'Venezueladebt4',
            caption: '2021-2025',
            icon: 'pie_chart',
            path: 'venezueladebt4',
          },
        ],
      },
    ],
  },
  {
    label: 'Bertelsmann',
    caption: '',
    icon: 'folder',
    children: [
      {
        label: 'Dem Index Bertelsmann',
        caption: 'Dem index',
        icon: 'folder',
        children: [
          {
            label: 'Venezueladember',
            caption: '2024',
            icon: 'pie_chart',
            path: 'venezueladember',
          },
          {
            label: 'Cubadember',
            caption: '',
            icon: 'pie_chart',
            path: 'cubadember',
          },
          {
            label: '',
            caption: '',
            icon: 'pie_chart',
            path: '',
          },
        ],
      },
      {
        label: 'Gov Index Bertelsmann',
        caption: 'Dem index',
        icon: 'folder',
        children: [
          {
            label: 'Venezuelagovber',
            caption: '2024',
            icon: 'pie_chart',
            path: 'venezuelagovber',
          },
          {
            label: 'Cubagovber',
            caption: '',
            icon: 'pie_chart',
            path: 'cubagovber',
          },
          {
            label: '',
            caption: '',
            icon: 'pie_chart',
            path: '',
          },
          {
            label: '',
            caption: '',
            icon: 'pie_chart',
            path: '',
          },
        ],
      },
      {
        label: 'Eco Index Bertelsmann',
        caption: 'Dem index',
        icon: 'folder',
        children: [
          {
            label: 'Venezuelaecober',
            caption: '2024',
            icon: 'pie_chart',
            path: 'venezuelaecober',
          },
          {
            label: 'cubaecober',
            caption: '',
            icon: 'pie_chart',
            path: 'cubaecober',
          },
          {
            label: '',
            caption: '',
            icon: 'pie_chart',
            path: '',
          },
          {
            label: '',
            caption: '',
            icon: 'pie_chart',
            path: '',
          },
        ],
      },
    ],
  },
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
