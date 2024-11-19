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
  { value: 7.3, name: 'Stateness' },
  { value: 7.5, name: 'Pol. Part.' },
  { value: 5.3, name: 'Rule of law' },
  { value: 8, name: 'Stab. Dem. Ins.' },
  { value: 6.5, name: 'Pol. Soc. Int.' },
  { value: 6.9, name: 'Dem Status' },
];
</script>
