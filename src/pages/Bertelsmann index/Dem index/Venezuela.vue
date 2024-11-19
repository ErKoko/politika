<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 6.5, name: 'Stateness' },
  { value: 2.5, name: 'Pol.Part.' },
  { value: 1.8, name: 'Rule of Law' },
  { value: 2, name: 'Stab.Dem.Ins.' },
  { value: 2.7, name: 'Pol. and Soc. Int.' },
  { value: 3.1, name: 'dem Status' },
];
</script>
