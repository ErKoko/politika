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
  { value: 12239280550607.0, name: 'enero 2023' },
  { value: 14601356012541.0, name: 'febrero 2023' },
  { value: 15490514782840.0, name: 'marzo 2023' },
  { value: 16079339845526.0, name: 'abril 2023' },
  { value: 16903293865296.0, name: 'mayo 2023' },
  { value: 17944103145880.0, name: 'junio 2023' },
  { value: 19056534939965.0, name: 'julio 2023' },
  { value: 20470345755121.0, name: 'agosto 2023' },
  { value: 22244633245732.0, name: 'septiembre 2023' },
  { value: 23547066397943.0, name: 'octubre 2023' },
  { value: 24361617825592.0, name: 'noviembre 2023' },
  { value: 24952896762596.0, name: 'diciembre 2023' },
];
</script>
