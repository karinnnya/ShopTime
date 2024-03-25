<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


export default {
  name: 'BarChart',
  components: { Line },
  data() {
    return {
      chartData: {

        labels: ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN', '11 JUN', '12 JUN', '13 JUN'],
        datasets: [

          {
            label: 'TOTAL REVENUE',
            borderWidth: 2,
            borderColor: '#7ED321',
            backgroundColor: '#7ED321',
            data: [7600, 7500, 6000, 7500, 5900, 7900, 7600, 7500]
          },
          {
            label: 'TOTAL REVENUE2',
            borderWidth: 2,
            borderColor: '#4A90E2 ',
            backgroundColor: '#4A90E2 ',
            data: [6000, 5500, 2000, 4000, 3900, 5700, 6000, 4500]

          },
          {
            label: 'TOTAL REVENUE',
            borderWidth: 2,
            borderColor: '#D0021B ',
            backgroundColor: '#D0021B ',
            data: [500, 2300, 2600, 2700, 2600, 500, 1500, 2100]

          },

        ]

      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>