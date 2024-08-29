<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2019" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 328067625.1, name: 'enero 2019' },
  { value: 703258998.2, name: 'febrero 2019' },
  { value: 948197109.5, name: 'marzo 2019' },
  { value: 1268517090.9, name: 'abril 2019' },
  { value: 1769365733.3, name: 'mayo 2019' },
  { value: 2160430969.8, name: 'junio 2019' },
  { value: 2579165719.7, name: 'julio 2019' },
  { value: 3472176093.2, name: 'agosto 2019' },
  { value: 5286006214.7, name: 'septiembre 2019' },
  { value: 6478423519.2, name: 'octubre 2019' },
  { value: 8144026231.7, name: 'noviembre 2019' },
  { value: 10711919174.4, name: 'diciembre 2019' },
];
</script>
