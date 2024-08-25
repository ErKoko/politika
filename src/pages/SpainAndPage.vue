<template>
  <q-page class="row items-center justify-evenly">
    <parlament-chart :data="data" title="Parlamento de Andalucía" :scale="45" />
  </q-page>
</template>

<script setup lang="ts">
import ParlamentChart from 'src/components/ParlamentChart.vue';

const data = [
  { value: 58, name: 'Partido Popular', color: '#2b4b8f' },
  { value: 14, name: 'Vox', color: '#76b82a' },
  { value: 30, name: 'Partido Socialista Obrero Español', color: '#f3110f' },
  { value: 5, name: 'Por Andalucía', color: '#156934' },
  { value: 2, name: 'Grupo Mixto', color: '#24c870' },
];
</script>
