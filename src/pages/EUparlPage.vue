<template>
  <q-page class="row items-center justify-evenly">
    <parlament-chart :data="data" title="Parlamento Europeo" />
  </q-page>
</template>

<script setup lang="ts">
import ParlamentChart from 'src/components/ParlamentChart.vue';

const data = [
  { value: 188, name: 'EPP', color: '#3c83ce' },
  { value: 136, name: 'S&D', color: '#f3110f' },
  { value: 84, name: 'Patriots for Europe', color: '#301c59' },
  { value: 78, name: 'ECR', color: '#316ba8' },
  { value: 77, name: 'Renew Europe', color: '#f9d70c' },
  { value: 53, name: 'Greens/Free Europe Alliance', color: '#62b45f' },
  { value: 46, name: 'The Left', color: '#af201f' },
  { value: 32, name: 'NI', color: '#24517e' },
  { value: 25, name: 'ESN', color: '#999999' },
  { value: 25, name: 'Vacant', color: '#f1f1f1' },
];
</script>
