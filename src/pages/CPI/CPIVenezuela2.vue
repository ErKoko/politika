<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2009" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 33.9, name: 'enero 2009' },
  { value: 35.6, name: 'febrero 2009' },
  { value: 37.2, name: 'marzo 2009' },
  { value: 39.7, name: 'abril 2009' },
  { value: 42.5, name: 'mayo 2009' },
  { value: 45, name: 'junio 2009' },
  { value: 48, name: 'julio 2009' },
  { value: 51.3, name: 'agosto 2009' },
  { value: 55.1, name: 'septiembre 2009' },
  { value: 58, name: 'octubre 2009' },
  { value: 61, name: 'noviembre 2009' },
  { value: 63.7, name: 'diciembre 2009' },
];
</script>
