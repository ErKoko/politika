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
      'Venezuela',
      'España',
      'EEUU',
      'China',
      'Sudáfrica',
      'India',
      'Iran',
      'EAU',
      'Egypt',
      'Brasil',
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
      '1989',
      '1990',
    ],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Venezuela',
      type: 'bar',
      data: [-4.9, -1.3, 2.6, -9.9, 5.2, 0.9, 6.1, 4.8, 6.5, -13.9, 6.5],
    },
    {
      name: 'España',
      type: 'bar',
      data: [1.2, -0.4, 1.2, 1.7, 1.7, 2.4, 3.4, 5.7, 5.3, 5, 3.8],
    },
    {
      name: 'EEUU',
      type: 'bar',
      data: [-0.3, 2.5, -1.8, 4.6, 7.2, 4.2, 3.5, 3.5, 4.2, 3.7, 1.9],
    },
    {
      name: 'China',
      type: 'bar',
      data: [7.9, 5.1, 9, 10.8, 15.2, 13.5, 8.9, 11.7, 11.2, 4.2, 3.9],
    },
    {
      name: 'Sudáfrica',
      type: 'bar',
      data: [6.6, 5.4, -0.4, -1.8, 5.1, -1.2, 0, 2.1, 4.2, 2.4, -0.3],
    },
    {
      name: 'India',
      type: 'bar',
      data: [6.7, 6, 3.5, 7.3, 3.8, 5.3, 4.8, 4, 9.6, 5.9, 5.5],
    },
    {
      name: 'Iran',
      type: 'bar',
      data: [-21.6, -5.7, 23.2, 11.1, -7.1, 1.9, -9.8, -0.2, -6.1, 6.1, 13.6],
    },
    {
      name: 'EAU',
      type: 'bar',
      data: [-1.8, 8, -7.2, -5.2, 4.5, -2.5, -19.3, 5.3, -2.6, 15.7, 23.6],
    },
    {
      name: 'Egypt',
      type: 'bar',
      data: [3.4, 2.2, 7.3, 8.9, 8, 7.4, 4.8, 4.3, 4, 3, 2.3],
    },
    {
      name: 'Brasil',
      type: 'bar',
      data: [9.2, -4.4, 0.6, -3.4, 5.3, 7.9, 7.5, 3.6, 0.3, 3.2, -4.2],
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
  ],
});
</script>

<style scoped>
.chart {
  height: 90vh;
}
</style>
