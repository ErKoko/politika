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
    text: 'GDP Growth (1991-2000)',
  },
  legend: {
    data: [
      'China',
      'Rusia',
      'Sudáfrica',
      'India',
      'Iran',
      'EAU',
      'Egypt',
      'Brasil',
      'Ethiopia',
    ],
  },
  xAxis: {
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
  series: [
    {
      name: 'China',
      type: 'bar',
      data: [9, 14.3, 13.9, 13, 11, 9.9, 9.2, 7.9, 7.7, 8.5],
    },
    {
      name: 'Rusia',
      type: 'bar',
      data: [-5, -14.5, -8.7, -12.7, -4.1, -3.6, 1.4, -5.3, 6.3, 10.1],
    },
    {
      name: 'Sudáfrica',
      type: 'bar',
      data: [-1, -2.1, 1.2, 3.2, 3.1, 4.3, 2.6, 0.5, 2.4, 4.2],
    },
    {
      name: 'India',
      type: 'bar',
      data: [1.1, 5.5, 4.8, 6.7, 7.6, 7.5, 4, 6.2, 8.8, 3.8],
    },
    {
      name: 'Iran',
      type: 'bar',
      data: [12.7, 3.3, -1.5, -1.7, 2.4, 6.4, 1.4, 2.1, 2, 5.8],
    },
    {
      name: 'EAU',
      type: 'bar',
      data: [2.2, 3.1, 0.3, 7.4, 6.6, 5.4, 8.6, 0.9, 3.8, 12.3],
    },
    {
      name: 'Egipto',
      type: 'bar',
      data: [2.1, 0.3, 2.9, 2.9, 4.2, 4.5, 4.9, 5.9, 7.5, 6.1],
    },
    {
      name: 'Ethiopia',
      type: 'bar',
      data: [4, 0, 1, 7.8, -2.3, -11.4, 9.7, 13.9, 0.6, -0.5, 2.6],
    },
    {
      name: 'Brasil',
      type: 'bar',
      data: [1, -0.5, 4.7, 5.3, 4.4, 2.2, 3.4, 0.3, 0.5, 4.4],
    },
  ],
} as EChartsOption;
</script>
