<template>
  <q-page class="row items-center justify-evenly">
    <parlament-chart :data="data" title="Parlamento Argentino" :scale="55" />
  </q-page>
</template>

<script setup lang="ts">
import ParlamentChart from 'src/components/ParlamentChart.vue';

const data = [
  { value: 85, name: 'Partido Judicialista (PJ)', color: '#3d9ee3' },
  { value: 8, name: 'Frente Renovador (escisión PJ)', color: '#3d9ee3' },
  { value: 2, name: 'Frente Patria Grande', color: '#3d9ee3' },
  { value: 1, name: 'Partido Solidario', color: '#3d9ee3' },
  { value: 1, name: 'Kolina', color: '#3d9ee3' },
  { value: 2, name: 'Nuevo Encuentro', color: '#3d9ee3' },
  { value: 3, name: 'PTS', color: '#e34f59' },
  { value: 1, name: 'IS', color: '#e34f59' },
  { value: 1, name: 'PO', color: '#e34f59' },
  { value: 16, name: 'Hacemos Coalición Federal', color: '#43bc9d' },
  { value: 34, name: 'UCR', color: '#d70d1e' },
  { value: 8, name: 'Innovación Federal', color: '#161072' },
  { value: 6, name: 'Coalición Cívica', color: '#75b53e' },
  { value: 2, name: 'Buenos Aires Libre', color: '#5566ad' },
  { value: 2, name: 'Por Santa Cruz', color: '#2e68b4' },
  { value: 2, name: 'Producción y Trabajo', color: '#d3d019' },
  { value: 1, name: 'Movimiento popular neuquino', color: '#2c6fb8' },
  { value: 38, name: 'La Libertad Avanza', color: '#6c4c99' },
  { value: 37, name: 'PRO', color: '#f9d80c' },
  {
    value: 3,
    name: 'Movimiento de Integración y Desarrollo',
    color: '#152b3d',
  },
  { value: 3, name: 'Bloque Independencia (escisión PJ)', color: '#3a5ecf' },
  { value: 1, name: 'CREO', color: '#f14f16' },
];
</script>
