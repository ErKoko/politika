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
  { value: 5.8, name: 'Market Org' },
  { value: 6.5, name: 'Monetary and fiscal' },
  { value: 6.5, name: 'Private Property' },
  { value: 4.5, name: 'Private Property' },
  { value: 6, name: 'Economic performance' },
  { value: 3.5, name: 'Sustainability' },
  { value: 5, name: 'Eco. Status' },
];
</script>
