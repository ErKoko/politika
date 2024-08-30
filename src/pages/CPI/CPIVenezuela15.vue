<template>
  <q-page class="row items-center justify-evenly">
    <pie-chart :data="data" title="IPC Venezuela 2020" />
  </q-page>
</template>

<script setup lang="ts">
import PieChart from 'src/components/PieChart.vue';

defineOptions({
  name: 'IndexPage',
});

const data = [
  { value: 100, name: 'diciembre 2007' },
  { value: 2750974553936.0, name: 'enero 2022' },
  { value: 28321007935345, name: 'febrero 2022' },
  { value: 287070232735.8, name: 'marzo 2022' },
  { value: 2997960561527.7, name: 'abril 2022' },
  { value: 3194057161863.8, name: 'mayo 2022' },
  { value: 3557760912488.8, name: 'junio 2022' },
  { value: 3825157521097.5, name: 'julio 2022' },
  { value: 4137433044125.2, name: 'agosto 2022' },
  { value: 5326371620885.8, name: 'septiembre 2022' },
  { value: 5654207045037.4, name: 'octubre 2022' },
  { value: 6364445507967.7, name: 'noviembre 2022' },
  { value: 8610897383990.4, name: 'diciembre 2022' },
];
</script>
