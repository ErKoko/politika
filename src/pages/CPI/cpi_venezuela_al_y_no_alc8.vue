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
  { value: 1527355119904.8, name: 'enero 2021' },
  { value: 2040042413036.8, name: 'febrero 2021' },
  { value: 2317059772316.7, name: 'marzo 2021' },
  { value: 2749678002424.6, name: 'abril 2021' },
  { value: 3435502689814.3, name: 'mayo 2021' },
  { value: 4003597414618.5, name: 'junio 2021' },
  { value: 4593287277832.4, name: 'julio 2021' },
  { value: 5438406204099.2, name: 'agosto 2021' },
  { value: 5748884814296.9, name: 'septiembre 2021' },
  { value: 6091115927297.9, name: 'octubre 2021' },
  { value: 6634382556862.6, name: 'noviembre 2021' },
  { value: 7061636793531.0, name: 'diciembre 2021' },
];
</script>
