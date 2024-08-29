<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2018" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 140960.9, name: 'enero 2018' },
  { value: 203974.2, name: 'febrero 2018' },
  { value: 287522.2, name: 'marzo 2018' },
  { value: 448024, name: 'abril 2018' },
  { value: 942381, name: 'mayo 2018' },
  { value: 1853769.6, name: 'junio 2018' },
  { value: 3362689.7, name: 'julio 2018' },
  { value: 5918947.9, name: 'agosto 2018' },
  { value: 13479880.5, name: 'septiembre 2018' },
  { value: 25355473.7, name: 'octubre 2018' },
  { value: 56589483.5, name: 'noviembre 2018' },
  { value: 110597450.2, name: 'diciembre 2018' },
];
</script>
