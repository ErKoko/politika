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
  { value: 27.70046742, name: '2000' },
  { value: 30.72885156, name: '2001' },
  { value: 48.17666822, name: '2002' },
  { value: 56.02899947, name: '2003' },
  { value: 41.78302582, name: '2004' },
  { value: 34.91286012, name: '2005' },
  { value: 25.65818301, name: '2006' },
  { value: 26.36441459, name: '2007' },
  { value: 20.31132034, name: '2008' },
  { value: 27.57364047, name: '2009' },
  { value: 37.70645934, name: '2010' },
];
</script>
