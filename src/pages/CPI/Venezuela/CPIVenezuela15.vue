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
  { value: 2832100793534.5, name: 'febrero 2022' },
  { value: 287070232735.8, name: 'marzo 2022' },
  { value: 2997960561527.7, name: 'abril 2022' },
  { value: 3194057161863.8, name: 'mayo 2022' },
  { value: 3557760912488.8, name: 'junio 2022' },
  { value: 3825157521097.5, name: 'julio 2022' },
  { value: 4137433044125.2, name: 'agosto 2022' },
  { value: 5326371620885.8, name: 'septiembre 2022' },
  { value: 5654207045037.4, name: 'octubre 2022' },
  { value: 24361617825592.0, name: 'noviembre 2022' },
  { value: 24952896762596.0, name: 'diciembre 2022' },
];
</script>
