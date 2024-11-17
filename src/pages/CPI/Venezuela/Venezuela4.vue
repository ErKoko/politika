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
  { value: 113.9, name: 'enero 2011' },
  { value: 117.6, name: 'febrero 2011' },
  { value: 120.7, name: 'marzo 2011' },
  { value: 123.9, name: 'abril 2011' },
  { value: 129.6, name: 'mayo 2011' },
  { value: 135.3, name: 'junio 2011' },
  { value: 141.6, name: 'julio 2011' },
  { value: 146.9, name: 'agosto 2011' },
  { value: 150.9, name: 'septiembre 2011' },
  { value: 155.5, name: 'octubre 2011' },
  { value: 161, name: 'noviembre 2011' },
  { value: 165.6, name: 'diciembre 2011' },
];
</script>
