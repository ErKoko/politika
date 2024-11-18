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
  { value: 30.8, name: 'enero 2008' },
  { value: 30.3, name: 'febrero 2008' },
  { value: 30.1, name: 'marzo 2008' },
  { value: 30.2, name: 'abril 2008' },
  { value: 112.4, name: 'mayo 2008' },
  { value: 115.1, name: 'junio 2008' },
  { value: 117.3, name: 'julio 2008' },
  { value: 119.4, name: 'agosto 2008' },
  { value: 121.8, name: 'septiembre 2008' },
  { value: 124.7, name: 'octubre 2008' },
  { value: 127.6, name: 'noviembre 2008' },
  { value: 130.9, name: 'diciembre 2008' },
];
</script>
