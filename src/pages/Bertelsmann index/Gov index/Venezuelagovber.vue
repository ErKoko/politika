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
  { value: 1.7, name: 'Steering Cap.' },
  { value: 1.3, name: 'Resource Eff.' },
  { value: 1.8, name: 'Consenssus-Build.' },
  { value: 2.7, name: 'Int. Coop.' },
  { value: 1.6, name: 'Gov. Index' },
];
</script>
