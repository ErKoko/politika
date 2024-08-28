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
      name: 'Guinea Ecuatorial',
      type: 'bar',
      data: [2.5, -1.2, 33, 10.5, 16.8, 26.5, 52.7, 148, 24.8, 26.4, 110.5],
    },
    {
      name: 'Cameroon',
      type: 'bar',
      data: [-3.8, -3.1, -3.2, -2.5, 3.3, 4.9, 5.3, 4.9, 4.1, 3.4],
    },
    {
      name: 'Chad',
      type: 'bar',
      data: [10.4, 2.4, -2.1, 5.5, -0.8, 2.1, 5.7, 7, -0.7, -0.9],
    },
    {
      name: 'Congo Dem Rep',
      type: 'bar',
      data: [-6.6, -8.4, -10.5, -13.5, -6.1, 2.8, -1.9, -7.8, -3.9, -3.8, -8.1],
    },
    {
      name: 'Angola',
      type: 'bar',
      data: [12.1, 11.4, 11, 10.5, 10.4, 11.2, 7.3, 4.7, 2.2, 3.1],
    },
    {
      name: 'African Central Republic',
      type: 'bar',
      data: [-0.8, -4.9, -1.2, 12.6, 3.2, -6.2, 4.1, 3.3, 2.9, -3.6],
    },
    {
      name: 'Republic of Congo',
      type: 'bar',
      data: [1, 3.4, 4.2, 1.3, -1.4, 4, 3.5, -1, 8.9, -3.7, 11.8],
    },
    {
      name: 'Gabon',
      type: 'bar',
      data: [6.1, -3.1, 3.9, 3.7, 5, 3.6, 5.7, 3.5, -8.9, -1.9],
    },
    {
      name: 'Burundi',
      type: 'bar',
      data: [5.8, 1, -6.2, -3.8, -7.9, -8, 0.4, 4, 8, 1.2, 1.8],
    },
    {
      name: 'Sao Tomé y Príncipe',
      type: 'bar',
      data: [1.2, 0.7, 1.1, 2.2, 2, 1.5, 1, 2.5, 2.5, 0.4],
    },
  ],
} as EChartsOption;
</script>
