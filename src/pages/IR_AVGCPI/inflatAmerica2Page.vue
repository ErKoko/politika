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
    text: 'inflation rate, average CPI (1991-2000)',
  },
  legend: {
    data: [
      'Venezuela',
      'El Salvador',
      'Canada',
      'EEUU',
      'México',
      'Honduras',
      'Mexico',
      'Brazil',
      'Chile',
      'Haiti',
      'Argentina',
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
      data: [34.2, 31.4, 38.1, 60.8, 59.9, 99.9, 50, 35.8, 23.6, 16.2],
    },
    {
      name: 'El Salvador',
      type: 'bar',
      data: [14.4, 11.2, 18.5, 10.6, 10, 9.8, 4.5, 2.5, 0.5, 2.3],
    },
    {
      name: 'Canada',
      type: 'bar',
      data: [5.6, 1.5, 1.9, 0.2, 2.1, 1.6, 1.6, 1, 1.7, 2.7],
    },
    {
      name: 'Honduras',
      type: 'bar',
      data: [33.9, 8.7, 10.8, 21.8, 29.4, 23.8, 20.2, 13.7, 11.7, 11],
    },
    {
      name: 'Belize',
      type: 'bar',
      data: [7.1, 11.2, 6.8, 5, 3.4, 4.2, 0.8, 2, 5.3, 0, 2],
    },
    {
      name: 'Brazil',
      type: 'bar',
      data: [432.8, 952, 1927.4, 2075.8, 66, 15.8, 6.9, 3.2, 4.9, 7],
    },
    {
      name: 'Mexico',
      type: 'bar',
      data: [4.2, 3, 3, 2.6, 2.8, 2.9, 2.3, 1.5, 2.2, 3.4],
    },
    {
      name: 'Chile',
      type: 'bar',
      data: [21.8, 15.5, 12.7, 11.5, 8.2, 7.4, 6.1, 5.1, 3.3, 3.8],
    },
    {
      name: 'Haiti',
      type: 'bar',
      data: [15.4, 19.4, 22.6, 42.6, 30.2, 20.6, 11.6, 6.6, 2.8, 6.4],
    },
    {
      name: 'Argentina',
      type: 'bar',
      data: [0, 0, 0, 0, 0, 0, 0, 0.9, -1, 2, -0, 9],
    },
  ],
} as EChartsOption;
</script>
