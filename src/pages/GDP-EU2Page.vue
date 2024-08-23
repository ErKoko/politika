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
    text: 'GDP Growth (1990-2000)',
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
      'España',
      'France',
      'Germany',
      'Portugal',
      'Italy',
      'Turkiye',
      'Poland',
      'Hungary',
      'Romania',
      'Ukraine',
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
      '1991',
      '1992',
      '1993',
      '1994',
      '1995',
      '1996',
      '1997',
      '1998',
      '1999',
      '2000',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'España',
      type: 'bar',
      data: [2.5, 0.9, -1.3, 2.3, 4.1, 2.4, 3.9, 4.5, 4.7, 5.1],
    },
    {
      name: 'France',
      type: 'bar',
      data: [1, 1.6, -0.6, 2.4, 2.1, 1.4, 2.3, 3.6, 3.4, 3.9],
    },
    {
      name: 'Germany',
      type: 'bar',
      data: [5, 1.9, -1, 2.4, 1.5, 0.8, 1.8, 2, 1.9, 2.9],
    },
    {
      name: 'Italy',
      type: 'bar',
      data: [1.4, 0.8, -0.9, 2.2, 2.9, 1.2, 1.8, 1.8, 1.6, 3.8],
    },
    {
      name: 'Portugal',
      type: 'bar',
      data: [6.7, 3.5, 2.2, 1, -1, 1.6, 3.3, 7.6, 5.3, 6.6, 7.9],
    },
    {
      name: 'Poland',
      type: 'bar',
      data: [-6, -10, -4.8, 5.6, -4, 3.9, 3.5, 2.3, 3.3, 3.8, -7.2],
    },
    {
      name: 'Turkiye ',
      type: 'bar',
      data: [-0.8, 4.4, 3.4, 4.8, 6.8, 4.3, 6.9, 10, 2.1, 0.3, 9.3],
    },
    {
      name: 'Hungary',
      type: 'bar',
      data: [0.2, 2.9, 2.8, 0.7, 2.7, -0.3, 1.5, 4.1, -0.1, 0.7, -3.5],
    },
    {
      name: 'Romania',
      type: 'bar',
      data: [3.3, 0.1, 3.9, 6, 6, -0.1, 2.4, 0.8, -0.5, -5.8, -5.6],
    },
    {
      name: 'Ukraine',
      type: 'bar',
      data: [3.3, 0.1, 3.9, 6, 6, -0.1, 2.4, 0.8, -0.5, -5.8, -5.6],
    },
    {
      name: 'Latvia',
      type: 'bar',
      data: [0, 0, -11.4, 2.2, -2.1, 2.6, 8.8, 6.3, 2.8, 5.7],
    },
    {
      name: 'Lithuania',
      type: 'bar',
      data: [0, 0, 0, 0, 0, 5.2, 8.3, 7.5, -1.1, 3.7],
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
