<template>
  <q-page class="row items-center justify-evenly">
    <parlament-chart :data="data" title="Senado de España" />
  </q-page>
</template>

<script setup lang="ts">
import ParlamentChart from 'src/components/ParlamentChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 145, name: 'Partido Popular', color: '#2b4b8f' },
  { value: 9, name: 'IPLI', color: '#f7b335' },
  { value: 7, name: 'Grupo Plural', color: '#49bfc2' },
  { value: 6, name: 'Grupo Vasco', color: '#228000' },
  { value: 89, name: 'Partido Socialista Obrero Español', color: '#f3110f' },
  { value: 6, name: 'Izq. Confederal', color: '#e995b6' },
  { value: 4, name: 'Grupo Mixto', color: '#000000' },
];
</script>
