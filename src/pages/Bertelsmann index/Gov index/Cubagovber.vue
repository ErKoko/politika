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
  { value: 5.3, name: 'Esteering Cap.' },
  { value: 4, name: 'Resource Eff.' },
  { value: 3.2, name: 'Consensus-Building' },
  { value: 6, name: 'Int. Coop.' },
  { value: 4.1, name: 'Gov. Index' },
];
</script>
