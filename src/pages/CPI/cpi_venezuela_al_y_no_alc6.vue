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
  { value: 1344190028.9, name: 'enero 2019' },
  { value: 2910050551.9, name: 'febrero 2019' },
  { value: 3862801135.4, name: 'marzo 2019' },
  { value: 4993636197.0, name: 'abril 2019' },
  { value: 6929968607.5, name: 'mayo 2019' },
  { value: 8150474696.3, name: 'junio 2019' },
  { value: 9250707289.1, name: 'julio 2019' },
  { value: 12381979233.2, name: 'agosto 2019' },
  { value: 19023796767.3, name: 'septiembre 2019' },
  { value: 22424871171.2, name: 'octubre 2019' },
  { value: 26832031122.2, name: 'noviembre 2019' },
  { value: 35734362441.1, name: 'diciembre 2019' },
];
</script>
