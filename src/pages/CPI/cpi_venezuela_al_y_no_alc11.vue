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
  { value: 69672117805697.6, name: 'enero 2017' },
  { value: 70333668119644.4, name: 'febrero 2017' },
  { value: 71229927099382.9, name: 'marzo 2017' },
  { value: 72448917241654.0, name: 'abril 2017' },
  { value: 73825577617585.5, name: 'mayo 2017' },
  { value: 74906244241425.7, name: 'junio 2017' },
  { value: 75525441517118.3, name: 'julio 2017' },
];
</script>
