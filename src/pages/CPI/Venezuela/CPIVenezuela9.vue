<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2016" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 2476.5, name: 'enero 2016' },
  { value: 2701.1, name: 'febrero 2016' },
  { value: 2996.2, name: 'marzo 2016' },
  { value: 3441.6, name: 'abril 2016' },
  { value: 4095.9, name: 'mayo 2016' },
  { value: 4095.9, name: 'junio 2016' },
  { value: 5337.1, name: 'julio 2016' },
  { value: 5337.1, name: 'agosto 2016' },
  { value: 6264.4, name: 'septiembre 2016' },
  { value: 6773.9, name: 'octubre 2016' },
  { value: 7568.9, name: 'noviembre 2016' },
  { value: 8726.9, name: 'diciembre 2016' },
];
</script>
