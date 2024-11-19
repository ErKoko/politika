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
  { value: 4, name: 'Soc. Level' },
  { value: 2, name: 'Market Org.' },
  { value: 2.5, name: 'Monetary and Fiscal Stab.' },
  { value: 3, name: 'Private Property' },
  { value: 5.5, name: 'Welfare Reg.' },
  { value: 2, name: 'Eco. Per.' },
  { value: 5.5, name: 'Sustainability.' },
  { value: 5.5, name: 'Economy Status' },
];
</script>
