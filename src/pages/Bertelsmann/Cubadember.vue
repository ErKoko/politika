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
  { value: 8.8, name: 'Stateness' },
  { value: 1.5, name: 'Pol. Part.' },
  { value: 1, name: 'Consenssus-Build.' },
  { value: 2.3, name: 'Int. Coop.' },
  { value: 1.6, name: 'Gov. Index' },
];
</script>
