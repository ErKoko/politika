<template>
  <q-page class="row items-center justify-evenly">
    <v-chart :option="parliamentOption" class="chart" autoresize />
  </q-page>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { CustomChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';
import { useQuasar } from 'quasar';

defineOptions({
  name: 'IndexPage',
});

const $q = useQuasar();

use([
  CanvasRenderer,
  CustomChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, $q.dark.isActive ? 'dark' : 'light');

const data = [
  { value: 58, name: 'Partido Popular', color: '#2b4b8f' },
  { value: 14, name: 'Vox', color: '#76b82a' },
  { value: 30, name: 'Partido Socialista Obrero Español', color: '#f3110f' },
  { value: 5, name: 'Por Andalucía', color: '#156934' },
  { value: 2, name: 'Grupo Mixto', color: '#24c870' },
];

const radius = ['30%', '90%'];

const parliamentOption = (function () {
  let sum = data.reduce(function (sum, cur) {
    return sum + cur.value;
  }, 0);
  let angles = [];
  let startAngle = -Math.PI;
  let curAngle = startAngle;
  data.forEach(function (item) {
    angles.push(curAngle);
    curAngle += (item.value / sum) * Math.PI;
  });
  angles.push(startAngle + Math.PI);
  function parliamentLayout(
    startAngle: number,
    endAngle: number,
    totalAngle: number,
    r0: number,
    r1: number,
    size: number
  ) {
    let rowsCount = Math.ceil((r1 - r0) / size);
    let points = [];
    let r = r0;
    for (let i = 0; i < rowsCount; i++) {
      // Recalculate size
      let totalRingSeatsNumber = Math.round((totalAngle * r) / size);
      let newSize = (totalAngle * r) / totalRingSeatsNumber;
      for (
        let k = Math.floor((startAngle * r) / newSize) * newSize;
        k < Math.floor((endAngle * r) / newSize) * newSize - 1e-6;
        k += newSize
      ) {
        let angle = k / r;
        let x = Math.cos(angle) * r;
        let y = Math.sin(angle) * r;
        points.push([x, y]);
      }
      r += size;
    }
    return points;
  }
  return ref<EChartsOption>({
    title: {
      text: 'Parlamento de  Andalucía',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}',
    },
    legend: {
      data: [
        'Servant of the People',
        'For the future',
        'Ad Networks',
        'Video Ads',
        'Search Engines',
      ],
    },
    series: {
      type: 'custom',
      id: 'distribution',
      data,
      coordinateSystem: undefined,
      // universalTransition: true,
      // animationDurationUpdate: 1000,
      renderItem: (params, api) => {
        var idx = params.dataIndex;
        var viewSize = Math.min(api.getWidth(), api.getHeight() * 2);
        var r0 = ((parseFloat(radius[0]) / 100) * viewSize) / 2;
        var r1 = ((parseFloat(radius[1]) / 100) * viewSize) / 2;
        var cx = api.getWidth() * 0.5;
        var cy = api.getHeight() - 20;
        var size = viewSize / 50;
        var points = parliamentLayout(
          angles[idx],
          angles[idx + 1],
          Math.PI,
          r0,
          r1,
          size + 3
        );
        return {
          type: 'group',
          children: points.map((pt) => {
            return {
              type: 'circle',
              autoBatch: true,
              shape: {
                cx: cx + pt[0],
                cy: cy + pt[1],
                r: size / 2,
              },
              style: {
                fill: data[idx].color,
                lineWidth: 2,
              },
            };
          }),
        };
      },
    },
  });
})();
</script>

<style scoped>
.chart {
  height: 90vh;
}
</style>
