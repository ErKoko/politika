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
    text: 'GDP Growth (2001-2010)',
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
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
    ],
  },
  series: [
    {
      name: 'Guinea Ecuatorial',
      type: 'bar',
      data: [60, 19.6, 14.5, 30.4, 8.2, 6.5, 15.3, 17.8, 1.3, -8.9],
    },
    {
      name: 'Cameroon',
      type: 'bar',
      data: [3.4, 4.8, 5, 6.6, 1.2, 3.5, 4.1, 2.9, 2.6, 2.9],
    },
    {
      name: 'Chad',
      type: 'bar',
      data: [11.7, 8.5, 14.7, 33.6, 8.3, 1.7, 3.9, 4, 2.9, 10.5],
    },
    {
      name: 'Congo Dem Rep',
      type: 'bar',
      data: [-2.1, 2.9, 6.6, 7.7, 9.8, 5.1, 8.5, 7.4, 0.6, 7.8],
    },
    {
      name: 'Angola',
      type: 'bar',
      data: [4.2, 13.7, 3, 11, 15, 11.5, 14, 11.2, 0.9, 4.9],
    },
    {
      name: 'African Central Republic',
      type: 'bar',
      data: [2.6, 2.1, -2.2, -0.1, 2.9, 4.8, 4, 2.6, 2.8, 4.6],
    },
    {
      name: 'Republic of Congo',
      type: 'bar',
      data: [-4.8, 1, 0.5, -0.2, 9.2, 8, -6.6, 6.3, 11.6, 9.9],
    },
    {
      name: 'Gabon',
      type: 'bar',
      data: [2.1, 0.2, 1.7, 1.1, -0.8, -1.9, 6.3, 1.7, -2.3, 6.3],
    },
    {
      name: 'Burundi',
      type: 'bar',
      data: [1.7, 2.4, 2.5, 3.8, 4.4, 5.4, 3.5, 4.9, 3.8, 5.1],
    },
    {
      name: 'Sao Tomé y Príncipe',
      type: 'bar',
      data: [2.4, 2.4, 6.6, 3.8, 7.1, 9.1, 3.3, 8.2, 3.3, 1.4],
    },
  ],
} as EChartsOption;
</script>
