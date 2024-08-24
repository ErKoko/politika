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
      'Venezuela',
      'España',
      'EEUU',
      'México',
      'Argentina',
      'Canada',
      'Brasil',
      'Belize',
      'El Salvador',
      'Honduras',
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
      '1989',
      '1990',
    ],
  },
  series: [
    {
      name: 'Venezuela',
      type: 'bar',
      data: [-4.9, -1.3, 2.6, -9.9, 5.2, 0.9, 6.1, 4.8, 6.5, -13.9, 6.5],
    },
    {
      name: 'EEUU',
      type: 'bar',
      data: [-0.3, 2.5, -1.8, 4.6, 7.2, 4.2, 3.5, 3.5, 4.2, 3.7, 1.9],
    },
    {
      name: 'México',
      type: 'bar',
      data: [9.5, 9.6, 0, -4.6, 3.5, 1.9, -3.9, 2.1, 1.2, 3.6, 5.3],
    },
    {
      name: 'Argentina',
      type: 'bar',
      data: [0.7, -5.7, -3.1, 3.7, 2, -7, 7.1, 2.5, -2, -7, -1.3],
    },
    {
      name: 'Canada',
      type: 'bar',
      data: [2.2, 3.5, -3.2, 2.6, 5.9, 4.7, 2.1, 4.1, 4.4, 2.3, 0.2],
    },
    {
      name: 'Brasil',
      type: 'bar',
      data: [9.2, -4.4, 0.6, -3.4, 5.3, 7.9, 7.5, 3.6, 0.3, 3.2, -4.2],
    },
    {
      name: 'Belize',
      type: 'bar',
      data: [5, 0.2, -7.6, 6.1, 11.3, -1.4, 7.3, 22, 10.9, 15.5, 11.2],
    },
    {
      name: 'El Salvador',
      type: 'bar',
      data: [-8.6, -5.7, -6.3, 1.5, 1.3, 0.6, 0.2, 2.5, 1.9, 1, 4.8],
    },
    {
      name: 'Honduras',
      type: 'bar',
      data: [0.6, -1.2, -2.1, 0.9, 6.3, 5.6, 5.3, 6.6, 1.7, 2.7, 2.8],
    },
  ],
} as EChartsOption;
</script>
