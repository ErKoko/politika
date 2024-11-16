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
  { value: 4, name: 'Stateness' },
  { value: 2, name: 'Pol. Part.' },
  { value: 2.5, name: 'Rule of law' },
  { value: 3, name: 'Stab. Dem. Ins.' },
  { value: 5.5, name: 'Pol. Soc. Int.' },
  { value: 2, name: 'Dem Status' },
  { value: 5.5, name: 'Dem Status' },
];
</script>
