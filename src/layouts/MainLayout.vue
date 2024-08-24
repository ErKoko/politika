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
          default-expand-all
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
            label: 'Parlamento de Europa',
            caption: '2024',
            icon: 'pie_chart',
            path: 'eu_parl',
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
        label: 'Alliances',
        caption: 'PIB real %',
        icon: 'folder',
        children: [
          {
            label: 'CEEAC',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: 'ceeac',
          },
          {
            label: 'EU',
            caption: '1980-1990',
            icon: 'bar_chart',
            path: 'gdp_eu',
          },
          {
            label: 'EU2',
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
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
