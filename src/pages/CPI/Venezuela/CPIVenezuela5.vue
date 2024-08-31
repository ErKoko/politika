<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2012" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 169.5, name: 'enero 2012' },
  { value: 172.6, name: 'febrero 2012' },
  { value: 175, name: 'marzo 2012' },
  { value: 177.2, name: 'abril 2012' },
  { value: 181.5, name: 'mayo 2012' },
  { value: 185.5, name: 'junio 2012' },
  { value: 188.4, name: 'julio 2012' },
  { value: 191.5, name: 'agosto 2012' },
  { value: 196.1, name: 'septiembre 2012' },
  { value: 201.2, name: 'octubre 2012' },
  { value: 208.1, name: 'noviembre 2012' },
  { value: 218.9, name: 'diciembre 2012' },
];
</script>
