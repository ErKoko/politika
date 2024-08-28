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
      'España',
      'France',
      'Germany',
      'Portugal',
      'Italy',
      'Austria',
      'Belgium',
      'Greece',
      'Cyprus',
      'Denmark',
      '',
      'Poland',
      'Hungary',
      'Romania',
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
      name: 'España',
      type: 'bar',
      data: [15.6, 14.5, 14.4, 12.2, 11.3, 8.8, 8.8, 5.2, 4.8, 6.8, 6.7],
    },
    {
      name: 'France',
      type: 'bar',
      data: [1.8, 1.1, 2.5, 1.2, 1.5, 1.6, 2.3, 2.6, 4.7, 4.3, 2.9],
    },
    {
      name: 'Germany',
      type: 'bar',
      data: [1.3, 0.1, -0.8, 1.6, 2.8, 2.2, 2.4, 1.5, 3.7, 3.9, 5.7],
    },
    {
      name: 'Italy',
      type: 'bar',
      data: [3.1, -1.2, 0.4, 1.2, 3.2, 2.8, 2.9, 3.2, 4.2, 3.4, 2.1],
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
      name: 'Austria',
      type: 'bar',
      data: [2.3, -0.1, 1.9, 2.8, 0.3, 2.2, 2.3, 1.7, 1, 3.9, 4.3],
    },
    {
      name: 'Belgium',
      type: 'bar',
      data: [4.4, -0.3, 0.6, 0.3, 2.5, 1.7, 1.8, 2.3, 4.7, 3.5, 3.1],
    },
    {
      name: 'Cyprus',
      type: 'bar',
      data: [5.9, 3.1, 6.3, 5.3, 8.8, 4.7, 3.6, 7.1, 8.3, 8.1, 7.4],
    },
    {
      name: 'Denmark',
      type: 'bar',
      data: [-0.5, -0.7, 3.7, 2.6, 4.2, 4, 4.9, 0.3, 0, 0.6, 1.5],
    },
  ],
} as EChartsOption;
</script>
