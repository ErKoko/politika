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
  { value: 8.8, name: 'Stateness' },
  { value: 1.5, name: 'Pol. Part.' },
  { value: 2.8, name: 'Rule of law' },
  { value: 1, name: 'Stab. Dem. Ins.' },
  { value: 2.3, name: 'Pol. Soc. Int.' },
  { value: 3.3, name: 'Dem Status' },
];
</script>
