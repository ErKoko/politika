<template>
  <q-page class="row items-center justify-evenly">
    <v-chart :option="option" class="chart" autoresize />
  </q-page>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';
import { useQuasar } from 'quasar';

defineOptions({
  name: 'IndexPage',
});

const $q = useQuasar();

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

provide(THEME_KEY, $q.dark.isActive ? 'dark' : 'light');

const option = ref<EChartsOption>({
  title: {
    text: 'GDP Growth (1980-1990)',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    padding: 40,
    data: [
      'Guinea Ecuatorial',
      'Cameroon',
      'Gabon',
      'Congo Dem Rep',
      'Angola',
      'African Central Republic',
      'Chad',
      'Republic of Congo',
    ],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: [
      '1980',
      '1981',
      '1982',
      '1983',
      '1984',
      '1985',
      '1986',
      '1987',
      '1988',
      '1990',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Guinea Ecuatorial',
      type: 'bar',
      data: [4.8, 5.8, 2.2, 5, 1, 12.9, -2.3, 4.4, 2.7, -1.2, 2.5],
    },
    {
      name: 'Cameroon',
      type: 'bar',
      data: [9.9, 17.1, 7.6, 6.8, 7.5, 8.1, 6.8, -2.2, -7.9, -1.8, -6.2],
    },
    {
      name: 'Chad',
      type: 'bar',
      data: [-6, -10.8, 5.4, 15.7, 5.3, 7.9, 6, 3.6, 7.5, 2, 3.2],
    },
    {
      name: 'Congo Dem Rep',
      type: 'bar',
      data: [2.4, 0.9, -0.5, 1.4, 4.8, 0.5, 4.7, 2.7, 0.5, -1.3, -6.6],
    },
    {
      name: 'Angola',
      type: 'bar',
      data: [2.4, -4.4, 0, 4.2, 6, 3.5, 2.9, 4.1, 6.1, 0, -3.5],
    },
    {
      name: 'African Central Republic',
      type: 'bar',
      data: [-3, 13, -3.6, -6, 9.9, 3.7, 7.2, 0, 1.7, 3.8, 1.4],
    },
    {
      name: 'Republic of Congo',
      type: 'bar',
      data: [12.7, 2.6, 2.4, 2.4, 2.4, 2.4, 2.3, 2.3, 21.9, 21.3, 1],
    },
  ],
  color: [
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc',
    '#3474b3',
    '#964b00',
  ],
});
</script>

<style scoped>
.chart {
  height: 90vh;
}
</style>
