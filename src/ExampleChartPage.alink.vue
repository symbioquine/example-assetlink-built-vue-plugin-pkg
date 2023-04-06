<script setup>
import {
  Chart as ChartJS,
  Colors,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend
} from 'chart.js'

ChartJS.register(
  Colors,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend
);

import {
  Bar as BarChart
} from 'vue-chartjs'

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

const chartData = {
  labels: data.map(row => row.year),
  datasets: [
    {
      label: 'Acquisitions by year',
      data: data.map(row => row.count)
    }
  ]
};
</script>

<template>
  <bar-chart :data="chartData"></bar-chart>
</template>

<script>
export default {
  onLoad(handle, assetLink) {
    handle.defineRoute('com.example.farmos_asset_link.routes.v0.example_chart_page', route => {
      route.path('/example-chart-page');
      route.component(handle.thisPlugin);
    });
  }
}
</script>

<style scoped>
/* This style block isn't required, just included as an example to show that the scoped styling works */
canvas {
  border: solid black 10px;
}
</style>
