<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2021" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 480553055794.4, name: 'enero 2020' },
  { value: 643008821870.1, name: 'febrero 2020' },
  { value: 746784015647.9, name: 'marzo 2020' },
  { value: 930306187517.9, name: 'abril 2020' },
  { value: 1195582996917.2, name: 'mayo 2020' },
  { value: 1383038455019.5, name: 'junio 2020' },
  { value: 1613383509719.7, name: 'julio 2020' },
  { value: 1932171957424.9, name: 'agosto 2020' },
  { value: 2069027697176.4, name: 'septiembre 2020' },
  { value: 2210425050008.3, name: 'octubre 2020' },
  { value: 2396255483970.9, name: 'noviembre 2020' },
  { value: 2577508248786.0, name: 'diciembre 2020' },
];
</script>
