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
      'Guinea Ecuatorial',
      'Cameroon',
      'Gabon',
      'Congo Dem Rep',
      'Angola',
      'African Central Republic',
      'Chad',
      'Republic of Congo',
      'Burundi',
      'Sao Tomé y Príncipe',
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
      name: 'Guinea Ecuatorial',
      type: 'bar',
      data: [4.8, 5.8, 2.2, 5, 1, 12.9, -2.3, 4.4, 2.7, -1.2, 2.5],
    },
    {
      name: 'Cameroon',
      type: 'bar',
      data: [9.9, 17.1, 7.6, 6.8, 7.5, 8.1, 6.8, -2.2, -7.9, -1.8, -6.2],
    },
    {
      name: 'Chad',
      type: 'bar',
      data: [-6, -10.8, 5.4, 15.7, 5.3, 7.9, 6, 3.6, 7.5, 2, 3.2],
    },
    {
      name: 'Congo Dem Rep',
      type: 'bar',
      data: [2.4, 0.9, -0.5, 1.4, 4.8, 0.5, 4.7, 2.7, 0.5, -1.3, -6.6],
    },
    {
      name: 'Angola',
      type: 'bar',
      data: [2.4, -4.4, 0, 4.2, 6, 3.5, 2.9, 4.1, 6.1, 0, -3.5],
    },
    {
      name: 'African Central Republic',
      type: 'bar',
      data: [-3, 13, -3.6, -6, 9.9, 3.7, 7.2, 0, 1.7, 3.8, 1.4],
    },
    {
      name: 'Republic of Congo',
      type: 'bar',
      data: [12.7, 2.6, 2.4, 2.4, 2.4, 2.4, 2.3, 2.3, 21.9, 21.3, 1],
    },
    {
      name: 'Gabon',
      type: 'bar',
      data: [0, -4, 4.1, 2, 4.9, 5.8, -2.1, -15.4, 3.5, 15.4, 5.1],
    },
    {
      name: 'Burundi',
      type: 'bar',
      data: [-6.8, 12.2, -1.1, 3.7, 0.2, 11.8, 3.2, 5.5, 5, 1.3, 3.5],
    },
    {
      name: 'Sao Tomé y Príncipe',
      type: 'bar',
      data: [-1.1, -10.3, 3.1, -3.9, -6, 9.3, -5.8, -2.9, 2, 3.1, -2.2],
    },
  ],
} as EChartsOption;
</script>
