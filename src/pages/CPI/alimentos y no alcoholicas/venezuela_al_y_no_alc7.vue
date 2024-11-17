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
  { value: 60359626355.4, name: 'enero 2020' },
  { value: 70767436745.1, name: 'febrero 2020' },
  { value: 80037970971.8, name: 'marzo 2020' },
  { value: 104903367444.7, name: 'abril 2020' },
  { value: 150025452926.7, name: 'mayo 2020' },
  { value: 186307608486.7, name: 'junio 2020' },
  { value: 216457768784.2, name: 'julio 2020' },
  { value: 265827456711.4, name: 'agosto 2020' },
  { value: 341008778046.8, name: 'septiembre 2020' },
  { value: 435611433280.2, name: 'octubre 2020' },
  { value: 583292421424.8, name: 'noviembre 2020' },
  { value: 1074459637894.0, name: 'diciembre 2020' },
];
</script>
