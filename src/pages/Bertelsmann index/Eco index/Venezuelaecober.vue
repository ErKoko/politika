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
  { value: 2, name: 'Soc level' },
  { value: 2.8, name: 'Market Org' },
  { value: 1.5, name: 'Monetary and fiscal' },
  { value: 3, name: 'Private Property' },
  { value: 1, name: 'Economic performance' },
  { value: 2.5, name: 'Sustainability' },
  { value: 2.4, name: 'Eco. Status' },
];
</script>
