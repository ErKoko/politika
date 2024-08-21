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
    text: 'GDP Growth (1991-2000)',
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
      'Rusia',
      'Sudáfrica',
      'India',
      'Iran',
      'EAU',
      'Egypt',
      'Brasil',
      'Guinea Ecuatorial',
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
      name: 'Venezuela',
      type: 'bar',
      data: [9.7, 6.1, 0.3, -2.3, 4, -0.2, 6.4, 0.3, -6, 3.7],
    },
    {
      name: 'EEUU',
      type: 'bar',
      data: [-0.1, 3.5, 2.8, 4, 2.7, 3.8, 4.4, 4.5, 4.8, 4.1],
    },
    {
      name: 'México',
      type: 'bar',
      data: [4, 3.6, 2.9, 4.4, -5.9, 6.2, 7.2, 6.2, 2.8, 5],
    },
    {
      name: 'Argentina',
      type: 'bar',
      data: [10.5, 10.3, 6.3, 5.8, -2.8, 5.5, 8.1, 3.9, -3.4, -0.8],
    },
    {
      name: 'Canada',
      type: 'bar',
      data: [-2.1, 0.9, 2.7, 4.5, 2.7, 1.7, 4.3, 3.9, 5.1, 5.1],
    },
    {
      name: 'Brasil',
      type: 'bar',
      data: [1, -0.5, 4.7, 5.3, 4.4, 2.2, 3.4, 0.3, 0.5, 4.4],
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
