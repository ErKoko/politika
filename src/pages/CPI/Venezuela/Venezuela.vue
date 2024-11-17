<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2008" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 103.1, name: 'enero 2008' },
  { value: 105.3, name: 'febrero 2008' },
  { value: 7.1, name: 'marzo 2008' },
  { value: 8.9, name: 'abril 2008' },
  { value: 12.4, name: 'mayo 2008' },
  { value: 15.1, name: 'junio 2008' },
  { value: 17.3, name: 'julio 2008' },
  { value: 19.4, name: 'agosto 2008' },
  { value: 21.8, name: 'septiembre 2008' },
  { value: 24.7, name: 'octubre 2008' },
  { value: 27.6, name: 'noviembre 2008' },
  { value: 30.9, name: 'diciembre 2008' },
];
</script>
