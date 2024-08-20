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

        <q-expansion-item
          expand-separator
          icon="folder"
          label="Parlamentos"
          caption="Reparto de diputados"
          default-opened
        >
          <q-item :to="{ name: 'ukraine' }" clickable>
            <q-item-section avatar>
              <q-icon name="pie_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Verkhovna Rada of Ukraine </q-item-label>
            </q-item-section>
          </q-item>

          <q-item :to="{ name: 'spain' }" clickable>
            <q-item-section avatar>
              <q-icon name="pie_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Congreso de los Diputados </q-item-label>
            </q-item-section>
          </q-item>

          <q-item :to="{ name: 'spain2' }" clickable>
            <q-item-section avatar>
              <q-icon name="pie_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Senado de España </q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          icon="folder"
          label="GDP"
          caption="Producto Interior Bruto"
          default-opened
        >
          <q-item :to="{ name: 'gdp' }" clickable>
            <q-item-section avatar>
              <q-icon name="bar_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Real GDP </q-item-label>
            </q-item-section>
          </q-item>

          <q-item :to="{ name: 'gdp2' }" clickable>
            <q-item-section avatar>
              <q-icon name="bar_chart" />
            </q-item-section>
            <q-item-section>
              <q-item-label> Real GDP </q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'MainLayout',
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
