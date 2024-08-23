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

        <q-toolbar-title> Politiká </q-toolbar-title>
        <q-space></q-space>
        <q-btn flat icon="dark_mode" round @click="$q.dark.toggle"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title>Gráficas</q-toolbar-title>
        </q-toolbar>

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

        <q-expansion-item
          expand-separator
          icon="folder"
          label="GDP"
          caption="Producto Interior Bruto"
          default-opened
        >
          <q-expansion-item
            :header-inset-level="1"
            expand-separator
            icon="bar_chart"
            label="Real GDP"
            default-opened
          >
            <q-expansion-item
              :header-inset-level="2"
              expand-separator
              icon="bar_chart"
              label="Americas GDP"
              default-opened
            >
              <q-item :to="{ name: 'gdpamerica' }" clickable>
                <q-item-section avatar>
                  <q-icon name="bar_chart" />
                </q-item-section>
                <q-item-section>
                  <q-item-label> Americas 1980-1990 </q-item-label>
                </q-item-section>
              </q-item>

              <q-item :to="{ name: 'gdpamerica2' }" clickable>
                <q-item-section avatar>
                  <q-icon name="bar_chart" />
                </q-item-section>
                <q-item-section>
                  <q-item-label> Americas 1991-2000 </q-item-label>
                </q-item-section>
              </q-item>
            </q-expansion-item>

            <q-expansion-item
              :header-inset-level="2"
              expand-separator
              icon="bar_chart"
              label="Alliances GDP"
              default-opened
            >
              <q-item :to="{ name: 'gdpbrics2' }" clickable>
                <q-item-section avatar>
                  <q-icon name="bar_chart" />
                </q-item-section>
                <q-item-section>
                  <q-item-label> BRICS 1990-2000 </q-item-label>
                </q-item-section>
              </q-item>

              <q-item :to="{ name: 'ceeac' }" clickable>
                <q-item-section avatar>
                  <q-icon name="bar_chart" />
                </q-item-section>
                <q-item-section>
                  <q-item-label> CEEAC 1980-1990 </q-item-label>
                </q-item-section>
              </q-item>

              <q-item :to="{ name: 'gdp_eu' }" clickable>
                <q-item-section avatar>
                  <q-icon name="bar_chart" />
                </q-item-section>
                <q-item-section>
                  <q-item-label> EU 1980-1990 </q-item-label>
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { QTree } from 'quasar';
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
            icon: 'pie_chart',
            path: 'spain',
          },
          {
            label: 'Senado de España',
            icon: 'pie_chart',
            path: 'spain2',
          },
          {
            label: 'Parlamento de Andalucía',
            icon: 'pie_chart',
            path: 'spainand',
          },
          {
            label: 'Parlamento de Europa',
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
            icon: 'bar_chart',
            path: 'gdpamerica',
          },
          {
            label: 'Americas 2',
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
            icon: 'bar_chart',
            path: 'ceeac',
          },
          {
            label: 'EU',
            icon: 'bar_chart',
            path: 'gdp_eu',
          },
          {
            label: 'BRICS+',
            icon: 'bar_chart',
            path: 'gdpbrics',
          },
          {
            label: '  ',
            icon: 'bar_chart',
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
