<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2015" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 804.8, name: 'enero 2015' },
  { value: 849.1, name: 'febrero 2015' },
  { value: 900.2, name: 'marzo 2015' },
  { value: 963.8, name: 'abril 2015' },
  { value: 1048.8, name: 'mayo 2015' },
  { value: 1161, name: 'junio 2015' },
  { value: 1297.5, name: 'julio 2015' },
  { value: 1470.8, name: 'agosto 2015' },
  { value: 1652.1, name: 'septiembre 2015' },
  { value: 1851.3, name: 'octubre 2015' },
  { value: 2068.5, name: 'noviembre 2015' },
  { value: 2257.9, name: 'diciembre 2015' },
];
</script>
