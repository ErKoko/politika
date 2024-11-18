<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2012" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 269.5, name: 'enero 2012' },
  { value: 272.6, name: 'febrero 2012' },
  { value: 275, name: 'marzo 2012' },
  { value: 277.2, name: 'abril 2012' },
  { value: 281.5, name: 'mayo 2012' },
  { value: 285.5, name: 'junio 2012' },
  { value: 288.4, name: 'julio 2012' },
  { value: 291.5, name: 'agosto 2012' },
  { value: 296.1, name: 'septiembre 2012' },
  { value: 301.2, name: 'octubre 2012' },
  { value: 308.1, name: 'noviembre 2012' },
  { value: 318.9, name: 'diciembre 2012' },
];
</script>
