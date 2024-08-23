<template>
  <q-page class="row items-center justify-evenly">
    <parlament-chart :data="data" title="Congreso de los Diputados" />
  </q-page>
</template>

<script setup lang="ts">
import ParlamentChart from 'src/components/ParlamentChart.vue';

const data = [
  { value: 137, name: 'Partido Popular', color: '#2b4b8f' },
  { value: 33, name: 'Vox', color: '#6cbe21' },
  { value: 7, name: 'ERC', color: '#f7b335' },
  { value: 6, name: 'Junts', color: '#49bfc2' },
  { value: 6, name: 'EHB', color: '#b1d137' },
  { value: 5, name: 'PNV', color: '#228000' },
  { value: 120, name: 'Partido Socialista Obrero Español', color: '#f3110f' },
  { value: 27, name: 'Partido Plurinacional Sumar', color: '#e995b6' },
  { value: 8, name: 'Grupo Mixto', color: '#000000' },
];
</script>
