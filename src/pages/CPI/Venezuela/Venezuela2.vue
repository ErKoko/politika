<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2009" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 133.9, name: 'enero 2009' },
  { value: 135.6, name: 'febrero 2009' },
  { value: 137.2, name: 'marzo 2009' },
  { value: 139.7, name: 'abril 2009' },
  { value: 142.5, name: 'mayo 2009' },
  { value: 145, name: 'junio 2009' },
  { value: 148, name: 'julio 2009' },
  { value: 151.3, name: 'agosto 2009' },
  { value: 155.1, name: 'septiembre 2009' },
  { value: 158, name: 'octubre 2009' },
  { value: 161, name: 'noviembre 2009' },
  { value: 163.7, name: 'diciembre 2009' },
];
</script>
