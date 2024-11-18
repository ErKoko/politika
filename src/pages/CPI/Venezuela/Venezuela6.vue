<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2013" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 329.4, name: 'enero 2013' },
  { value: 334.8, name: 'febrero 2013' },
  { value: 344.1, name: 'marzo 2013' },
  { value: 358.8, name: 'abril 2013' },
  { value: 380.7, name: 'mayo 2013' },
  { value: 398.6, name: 'junio 2013' },
  { value: 411.3, name: 'julio 2013' },
  { value: 423.7, name: 'agosto 2013' },
  { value: 442.3, name: 'septiembre 2013' },
  { value: 464.9, name: 'octubre 2013' },
  { value: 487.3, name: 'noviembre 2013' },
  { value: 498.1, name: 'diciembre 2013' },
];
</script>
