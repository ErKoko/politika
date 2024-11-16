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
  { value: 248.3955889, name: '2000' },
  { value: 159.4794305, name: '2001' },
  { value: 148.2297915, name: '2002' },
  { value: 140.9254489, name: '2003' },
  { value: 135.466081, name: '2004' },
];
</script>
