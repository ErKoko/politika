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
      data: [
        69.841, 78.367, 79.998, 79.672, 57.826, 59.865, 60.877, 46.854, 60.378,
        44.672, 48.391,
      ],
    },
    {
      name: 'EEUU',
      type: 'bar',
      data: [
        2857.325, 3207.025, 3343.8, 3634.025, 4037.65, 4339, 4579.625, 4855.25,
        5236.425, 5641.6, 5963.125,
      ],
    },
    {
      name: 'México',
      type: 'bar',
      data: [
        242.153, 311.012, 225.706, 184.01, 217.001, 230.272, 159.434, 174.84,
        213.893, 260.663, 307.613,
      ],
    },
    {
      name: 'Argentina',
      type: 'bar',
      data: [
        233.696, 189.802, 94.25, 116.267, 130.544, 98.599, 118.565, 121.561,
        142.386, 91.352, 158.024,
      ],
    },
    {
      name: 'Canada',
      type: 'bar',
      data: [
        276.064, 307.246, 314.639, 341.863, 356.728, 366.184, 379.015, 433.14,
        509.38, 567.225, 596.089,
      ],
    },
    {
      name: 'Brasil',
      type: 'bar',
      data: [],
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
