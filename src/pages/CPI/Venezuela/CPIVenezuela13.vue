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
  { value: 17377625181.2, name: 'enero 2020' },
  { value: 21174462528.9, name: 'febrero 2020' },
  { value: 23995112695.7, name: 'marzo 2020' },
  { value: 30594008665.7, name: 'abril 2020' },
  { value: 42404519809.6, name: 'mayo 2020' },
  { value: 53033212724.9, name: 'junio 2020' },
  { value: 63408630481.9, name: 'julio 2020' },
  { value: 79061685027.4, name: 'agosto 2020' },
  { value: 101126220112.8, name: 'septiembre 2020' },
  { value: 131945446984.8, name: 'octubre 2020' },
  { value: 184682722730.1, name: 'noviembre 2020' },
  { value: 327767509070.0, name: 'diciembre 2020' },
];
</script>
