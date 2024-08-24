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
      'Venezuela',
      'EEUU',
      'Argentina',
      'Brasil',
      'Canada',
      'México',
      'Belize',
      'El Salvador',
      'Honduras',
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
    {
      name: 'Honduras',
      type: 'bar',
      data: [-3.3, 6.1, 6.5, 0.2, 6.2, 1.9, 4.6, 3.6, -0.7, 7.3],
    },
    {
      name: 'El Salvador',
      type: 'bar',
      data: [1.5, 7, 5.8, 4.7, 4.7, 0.8, 3.1, 2.7, 2.2, 1.1],
    },
    {
      name: 'Belize',
      type: 'bar',
      data: [11.5, 12, 6.3, 0.2, 0.6, 1.1, 3.6, 3.9, 9, 13],
    },
  ],
} as EChartsOption;
</script>
