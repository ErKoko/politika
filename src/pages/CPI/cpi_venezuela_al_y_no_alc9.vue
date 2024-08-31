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
  { value: 7465633034494.6, name: 'enero 2022' },
  { value: 7547157747232.4, name: 'febrero 2022' },
  { value: 7623233097325.5, name: 'marzo 2022' },
  { value: 8053640838006.1, name: 'abril 2022' },
  { value: 8748025751067.6, name: 'mayo 2022' },
  { value: 9851373968883.3, name: 'junio 2022' },
  { value: 10626710706665.3, name: 'julio 2022' },
  { value: 11357361622441.2, name: 'agosto 2022' },
  { value: 14826024166922.2, name: 'septiembre 2022' },
  { value: 15695376104764.5, name: 'octubre 2022' },
  { value: 17818131691399.8, name: 'noviembre 2022' },
  { value: 25240297669479.3, name: 'diciembre 2022' },
];
</script>
