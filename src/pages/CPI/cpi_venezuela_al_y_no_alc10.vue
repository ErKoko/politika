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
  { value: 36572344185574.9, name: 'enero 2017' },
  { value: 43593852469365.2, name: 'febrero 2017' },
  { value: 44926701235705.9, name: 'marzo 2017' },
  { value: 45969774990691.1, name: 'abril 2017' },
  { value: 48121750841931.8, name: 'mayo 2017' },
  { value: 50642580150170.2, name: 'junio 2017' },
  { value: 53407623335597.7, name: 'julio 2017' },
  { value: 57455383604110.2, name: 'agosto 2017' },
  { value: 61986547757926.4, name: 'septiembre 2017' },
  { value: 65764854052110.8, name: 'octubre 2017' },
  { value: 67785310678387.7, name: 'noviembre 2017' },
  { value: 68813857492643.3, name: 'diciembre 2017' },
];
</script>
