<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2020" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 1428.9, name: 'enero 2015' },
  { value: 1538.7, name: 'febrero 2015' },
  { value: 1671.6, name: 'marzo 2015' },
  { value: 1821.8, name: 'abril 2015' },
  { value: 2036.7, name: 'mayo 2015' },
  { value: 2378.7, name: 'junio 2015' },
  { value: 2795.7, name: 'julio 2015' },
  { value: 3299.3, name: 'agosto 2015' },
  { value: 3758.6, name: 'septiembre 2015' },
  { value: 4306.4, name: 'octubre 2015' },
  { value: 4871.8, name: 'noviembre 2015' },
  { value: 5387.7, name: 'diciembre 2015' },
];
</script>
