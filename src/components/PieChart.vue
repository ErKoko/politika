<template>
  <v-chart :option="options" class="chart" autoresize />
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { provide, computed } from 'vue';
import { useQuasar } from 'quasar';
import { merge } from 'lodash';

defineOptions({
  name: 'IndexPage',
});

const props = defineProps<{
  // data: (BarDataItemOption | OptionDataValue | OptionDataValue[])[];
  data: unknown;
}>();

const $q = useQuasar();

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

provide(THEME_KEY, $q.dark.isActive ? 'dark' : 'light');

const options = computed<EChartsOption>(() =>
  merge({
    title: {
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      padding: 40,
    },
    series: {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: props.data,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
    color: [
      '#5470c6',
      '#91cc75',
      '#fac858',
      '#ee6666',
      '#73c0de',
      '#3ba272',
      '#fc8452',
      '#9a60b4',
      '#ea7ccc',
      '#3474b3',
      '#964b00',
      '#b4ddd3',
      '#978b7d',
      '#40abe1',
    ],
  })
);
</script>

<style scoped>
.chart {
  height: 90vh;
}
</style>
