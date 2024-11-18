<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2011" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 213.9, name: 'enero 2011' },
  { value: 217.6, name: 'febrero 2011' },
  { value: 220.7, name: 'marzo 2011' },
  { value: 223.9, name: 'abril 2011' },
  { value: 229.6, name: 'mayo 2011' },
  { value: 235.3, name: 'junio 2011' },
  { value: 241.6, name: 'julio 2011' },
  { value: 246.9, name: 'agosto 2011' },
  { value: 250.9, name: 'septiembre 2011' },
  { value: 255.5, name: 'octubre 2011' },
  { value: 261, name: 'noviembre 2011' },
  { value: 265.6, name: 'diciembre 2011' },
];
</script>
