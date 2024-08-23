<template>
  <q-page class="row items-center justify-evenly">
    <parlament-chart :data="data" title="Parlamento de Ucrania" />
  </q-page>
</template>

<script setup lang="ts">
import ParlamentChart from 'src/components/ParlamentChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 235, name: 'Servant of the People', color: '#38b34a' },
  { value: 17, name: 'For the future', color: '#5c068c' },
  { value: 19, name: 'Dovira', color: '#1a9daa' },
  { value: 27, name: 'European Solidarity', color: '#1b3892' },
  { value: 24, name: 'Batkivshchyna', color: '#ed1c24' },
  { value: 20, name: 'Holos', color: '#fa4616' },
  { value: 22, name: 'Platform for Live and Peace', color: '#21409a' },
  { value: 17, name: 'Restoration of Ukraine', color: '#ffdd00' },
  { value: 24, name: 'Independent', color: '#dcdcdc' },
  { value: 46, name: 'Vacant', color: '#2c2c2c' },
];
</script>
