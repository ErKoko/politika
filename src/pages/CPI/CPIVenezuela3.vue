<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2010" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 66.5, name: 'enero 2010' },
  { value: 69.1, name: 'febrero 2010' },
  { value: 73.2, name: 'marzo 2010' },
  { value: 82.2, name: 'abril 2010' },
  { value: 87, name: 'mayo 2010' },
  { value: 90.4, name: 'junio 2010' },
  { value: 93.1, name: 'julio 2010' },
  { value: 96.2, name: 'agosto 2010' },
  { value: 98.4, name: 'septiembre 2010' },
  { value: 101.4, name: 'octubre 2010' },
  { value: 104.5, name: 'noviembre 2010' },
  { value: 108.2, name: 'diciembre 2010' },
];
</script>
