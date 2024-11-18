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
  { value: 166.5, name: 'enero 2010' },
  { value: 169.1, name: 'febrero 2010' },
  { value: 173.2, name: 'marzo 2010' },
  { value: 182.2, name: 'abril 2010' },
  { value: 187, name: 'mayo 2010' },
  { value: 190.4, name: 'junio 2010' },
  { value: 193.1, name: 'julio 2010' },
  { value: 196.2, name: 'agosto 2010' },
  { value: 198.4, name: 'septiembre 2010' },
  { value: 201.4, name: 'octubre 2010' },
  { value: 204.5, name: 'noviembre 2010' },
  { value: 208.2, name: 'diciembre 2010' },
];
</script>
