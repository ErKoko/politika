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
  { value: 6.3, name: 'Steering Cap.' },
  { value: 5.7, name: 'Resource Eff.' },
  { value: 7.8, name: 'Consensus-Build.' },
  { value: 8.7, name: 'Int. Coop.' },
  { value: 6.6, name: 'Gov. Index' },
];
</script>
