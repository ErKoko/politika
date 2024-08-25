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
    text: 'inflation rate (1980-1990)',
  },
  legend: {
    data: ['Venezuela', 'El Salvador'],
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
      name: 'Venezuela',
      type: 'bar',
      data: [21.4, 16.2, 9.6, 6.2, 12.2, 11.4, 11.5, 28.1, 29.5, 84.5, 40.7],
    },
    {
      name: 'El Salvador',
      type: 'bar',
      data: [17.4, 14.8, 11.7, 13.1, 11.7, 22.3, 31.9, 24.8, 19.8, 17.7, 28.3],
    },
    {
      name: 'Chad',
      type: 'bar',
      data: [],
    },
    {
      name: 'Congo Dem Rep',
      type: 'bar',
      data: [],
    },
    {
      name: 'Angola',
      type: 'bar',
      data: [],
    },
    {
      name: 'African Central Republic',
      type: 'bar',
      data: [],
    },
    {
      name: 'Republic of Congo',
      type: 'bar',
      data: [],
    },
  ],
} as EChartsOption;
</script>
