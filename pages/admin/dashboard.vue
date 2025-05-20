

<script setup>
import { onMounted, ref } from 'vue'
import { Chart, registerables } from 'chart.js'

import { useWebSocket } from '@vueuse/core'

Chart.register(...registerables)
definePageMeta({ layout: 'admin' })


const wsUrl = 'ws://localhost:3000/api/admin/dashboard/_ws'
const { status, data:wsData, send, open, close } = useWebSocket(wsUrl)
const wd=ref([])

watch(wsData, (newValue) => {
  wd.value=newValue
})

const dashboardData=ref(null)
const { data, refresh } = await useFetch("/api/admin/dashboard/dashboard-data");
dashboardData.value = data.value

const chartRef = ref(null)

const chartData = {
  labels: dashboardData.value.paymentsByDate.map(p => new Date(p.createdAt).toISOString().split('T')[0]),

  datasets: [
    {
      label: 'Payments ($)',
       data: dashboardData.value.paymentsByDate.map(p => p._sum.amount ?? 0),
      fill: false,
      borderColor: '#3b82f6',
      backgroundColor: '#cfe2ff',
      tension: 0.3,
      pointBackgroundColor: '#3b82f6'
    }
  ]
}


onMounted(() => {
  console.log("data :: ",process.env.NODE_ENV)
  const ctx = chartRef.value.getContext('2d')
  new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Earnings Over Time'
        }
      }
    }
  })
})
</script>

<template>
  <div class="h-screen">
    <h1 class="text-2xl mb-4">Dashboard-{{wd}}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Earnings</h2>
        <p class="text-gray-600 text-xl">${{dashboardData.totalEarnAmount._sum.amount}}</p>
      </div>
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Customers</h2>
        <p class="text-gray-600 text-xl">{{dashboardData.countCustomer}}</p>
      </div>
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Total Payments</h2>
        <p class="text-gray-600 text-xl">{{dashboardData.countPayment}}</p>
      </div>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-md">
      <canvas ref="chartRef" height="120"></canvas>
    </div>
  </div>
</template>
