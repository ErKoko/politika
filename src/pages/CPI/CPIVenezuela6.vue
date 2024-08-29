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
  { value: 229.4, name: 'enero 2013' },
  { value: 234.8, name: 'febrero 2013' },
  { value: 244.1, name: 'marzo 2013' },
  { value: 258.8, name: 'abril 2013' },
  { value: 280.7, name: 'mayo 2013' },
  { value: 298.6, name: 'junio 2013' },
  { value: 311.3, name: 'julio 2013' },
  { value: 323.7, name: 'agosto 2013' },
  { value: 342.3, name: 'septiembre 2013' },
  { value: 364.9, name: 'octubre 2013' },
  { value: 387.3, name: 'noviembre 2013' },
  { value: 398.1, name: 'diciembre 2013' },
];
</script>
