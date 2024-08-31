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
  { value: 25379624724621.0, name: 'enero 2024' },
  { value: 25684975428936.0, name: 'febrero 2024' },
  { value: 25986417377749.0, name: 'marzo 2024' },
  { value: 26516834159142.0, name: 'abril 2024' },
  { value: 26903972496768.0, name: 'mayo 2024' },
  { value: 27162536873398.0, name: 'junio 2024' },
  { value: 27366064708218.0, name: 'julio 2024' },
];
</script>
