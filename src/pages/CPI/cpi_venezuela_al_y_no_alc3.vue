<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2020" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 32178.1, name: 'enero 2016' },
  { value: 36547.6, name: 'febrero 2016' },
  { value: 40718.8, name: 'marzo 2016' },
  { value: 44495.7, name: 'abril 2016' },
  { value: 50719.5, name: 'mayo 2016' },
  { value: 57305.2, name: 'junio 2016' },
  { value: 64743.2, name: 'julio 2016' },
  { value: 77598.4, name: 'agosto 2016' },
  { value: 99421.5, name: 'septiembre 2016' },
  { value: 138486.7, name: 'octubre 2016' },
  { value: 192358.1, name: 'noviembre 2016' },
  { value: 307211.4, name: 'diciembre 2016' },
];
</script>
