<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2014" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 414.7, name: 'enero 2014' },
  { value: 426.8, name: 'febrero 2014' },
  { value: 448.3, name: 'marzo 2014' },
  { value: 479.4, name: 'abril 2014' },
  { value: 512.6, name: 'mayo 2014' },
  { value: 539.7, name: 'junio 2014' },
  { value: 566.2, name: 'julio 2014' },
  { value: 592.4, name: 'agosto 2014' },
  { value: 625.4, name: 'septiembre 2014' },
  { value: 661.8, name: 'octubre 2014' },
  { value: 697.3, name: 'noviembre 2014' },
  { value: 739.5, name: 'diciembre 2014' },
];
</script>
