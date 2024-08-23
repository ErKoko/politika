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
      'Turkiye',
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
      data: [1.2, -0.4, 1.2, 1.7, 1.7, 2.4, 3.4, 5.7, 5.3, 5, 3.8],
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
  ],
} as EChartsOption;
</script>
