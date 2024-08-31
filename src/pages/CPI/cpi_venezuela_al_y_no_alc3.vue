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
  { value: 6101.3, name: 'enero 2016' },
  { value: 6709.0, name: 'febrero 2016' },
  { value: 7403.6, name: 'marzo 2016' },
  { value: 8987.0, name: 'abril 2016' },
  { value: 11138.0, name: 'mayo 2016' },
  { value: 13983.5, name: 'junio 2016' },
  { value: 15809.1, name: 'julio 2016' },
  { value: 17414.2, name: 'agosto 2016' },
  { value: 19225.5, name: 'septiembre 2016' },
  { value: 20796.3, name: 'octubre 2016' },
  { value: 23302.8, name: 'noviembre 2016' },
  { value: 26337.7, name: 'diciembre 2016' },
];
</script>
