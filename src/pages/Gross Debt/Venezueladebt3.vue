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
  { value: 52.47604578, name: '2011' },
  { value: 58.44488555, name: '2012' },
  { value: 85.39947263, name: '2013' },
  { value: 84.89672801, name: '2014' },
  { value: 129.7622318, name: '2015' },
  { value: 138.4042322, name: '2016' },
  { value: 133.6095954, name: '2017' },
  { value: 174.6438464, name: '2018' },
  { value: 205.0732909, name: '2019' },
  { value: 327.6999911, name: '2020' },
];
</script>
