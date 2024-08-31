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
  { value: 581.9, name: 'enero 2014' },
  { value: 593.3, name: 'febrero 2014' },
  { value: 635.4, name: 'marzo 2014' },
  { value: 696.3, name: 'abril 2014' },
  { value: 747.1, name: 'mayo 2014' },
  { value: 812.1, name: 'junio 2014' },
  { value: 865.8, name: 'julio 2014' },
  { value: 923.2, name: 'agosto 2014' },
  { value: 989.1, name: 'septiembre 2014' },
  { value: 1055.6, name: 'octubre 2014' },
  { value: 1130.5, name: 'noviembre 2014' },
  { value: 1222.2, name: 'diciembre 2014' },
];
</script>
