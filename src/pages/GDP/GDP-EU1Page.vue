<template>
  <q-page class="row items-center justify-evenly">
    <bar-chart :option="option" />
  </q-page>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import BarChart from 'src/components/BarChart.vue';

const option = {
  title: {
    text: 'GDP Growth (1980-1990)',
  },
  legend: {
    data: [
      'Greece',
      'Norway',
      'Denmark',
      'Finland',
      'Sweden',
      'Bulgaria',
      'Ireland',
      'Luxemburg',
    ],
  },
  xAxis: {
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
  series: [
    {
      name: 'Greece',
      type: 'bar',
      data: [0.7, -1.6, -1.1, -1.1, 2, 2.5, 0, 5 - 2.3, 4.3, 3.8, 0],
    },
    {
      name: 'Finland',
      type: 'bar',
      data: [5.7, 1.3, 3.1, 3.1, 3.2, 3.5, 2.7, 3.6, 5.2, 5.1, 0.2],
    },
    {
      name: 'Norway',
      type: 'bar',
      data: [4.5, 1.6, 0.2, 4, 6.1, 5.6, 4, 1.8, -0.3, 1, 1.9],
    },
    {
      name: '',
      type: 'bar',
      data: [4.6, 4.5, 1.4, 2.1, 4.3, 2.3, 3, 3.3, 2.5, 2.7, 0.8],
    },
    {
      name: '',
      type: 'bar',
      data: [4.6, 4.5, 1.4, 2.1, 4.3, 2.3, 3, 3.3, 2.5, 2.7, 0.8],
    },
    {
      name: 'Sweden',
      type: 'bar',
      data: [4.6, 4.5, 1.4, 2.1, 4.3, 2.3, 3, 3.3, 2.5, 2.7, 0.8],
    },
    {
      name: 'Bulgaria',
      type: 'bar',
      data: [5.7, 5.3, 4.2, 3, 4.6, 1.8, 5.3, 4.7, 2.4, -0.5, -9.1],
    },
    {
      name: 'Ireland',
      type: 'bar',
      data: [2.9, 2.5, 1.5, -0.7, 3.2, 1.9, 0.4, 3.6, 3, 5.6, 7.7],
    },
    {
      name: 'Luxemburg',
      type: 'bar',
      data: [3.2, 0.8, 1, 1.9, 4.7, 5.6, 10, 4, 8.5, 9.8, 5, 3],
    },
  ],
} as EChartsOption;
</script>
