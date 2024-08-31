<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 533312.6, name: 'enero 2018' },
  { value: 782917.7, name: 'febrero 2018' },
  { value: 1113500.0, name: 'marzo 2018' },
  { value: 1803464.3, name: 'abril 2018' },
  { value: 4093233.5, name: 'mayo 2018' },
  { value: 7687139.3, name: 'junio 2018' },
  { value: 13752217.3, name: 'julio 2018' },
  { value: 24175373.7, name: 'agosto 2018' },
  { value: 50124843.7, name: 'septiembre 2018' },
  { value: 94387173.9, name: 'octubre 2018' },
  { value: 223104987.2, name: 'noviembre 2018' },
  { value: 442180796.4, name: 'diciembre 2018' },
];
</script>
