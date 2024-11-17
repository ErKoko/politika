<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2017" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 10278.1, name: 'enero 2017' },
  { value: 11597.2, name: 'febrero 2017' },
  { value: 12810.2, name: 'marzo 2017' },
  { value: 13875.9, name: 'abril 2017' },
  { value: 15510.4, name: 'mayo 2017' },
  { value: 17437.8, name: 'junio 2017' },
  { value: 19838.2, name: 'julio 2017' },
  { value: 23636.3, name: 'agosto 2017' },
  { value: 29821.9, name: 'septiembre 2017' },
  { value: 39373.9, name: 'octubre 2017' },
  { value: 54511, name: 'noviembre 2017' },
  { value: 84870.3, name: 'diciembre 2017' },
];
</script>
