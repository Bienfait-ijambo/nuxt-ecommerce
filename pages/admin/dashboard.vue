

<script setup>
import { onMounted, ref } from 'vue'
import { Chart, registerables } from 'chart.js'
import { useWebSocket } from '@vueuse/core'

Chart.register(...registerables)
definePageMeta({ layout: 'admin' })


const loading=ref(false)

const dashboardData=ref(null)
const { data, refresh } = await useFetch("/api/admin/dashboard/dashboard-data");
dashboardData.value = data.value

const wsUrl = 'ws://localhost:3000/api/admin/dashboard/_ws'
const { status, data:wsData, send, open, close } = useWebSocket(wsUrl)

watch(wsData, (newValue) => {
  loading.value=true
  setTimeout(function(){
    dashboardData.value=JSON.parse(newValue)
    drawChart()
    loading.value=false
  },2000)
})





const chartRef = ref(null)
const chartInstance = ref(null)


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

function drawChart(){
 
  const ctx = chartRef.value.getContext('2d')

   // Destroy existing chart if it exists
  if (chartInstance.value) {
    chartInstance.value.destroy()
  }

  // Create new chart and store it
  chartInstance.value =new Chart(ctx, {
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
}


onMounted(() => {
  drawChart()
  
})
</script>

<template>
  <div class="h-screen">
    <h1 class="text-2xl mb-4">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Earnings</h2>
        <LoadingIcon v-if="loading"  stroke="4" size="22" color="#78350F" />
        <p v-else class="text-gray-600 text-xl">${{dashboardData.totalEarnAmount._sum.amount}}</p>
      </div>
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Customers</h2>
        <LoadingIcon v-if="loading"  stroke="4" size="22" color="#78350F" />
        <p v-else class="text-gray-600 text-xl">{{dashboardData.countCustomer}}</p>
      </div>
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Total Payments</h2>
        <LoadingIcon v-if="loading"  stroke="4" size="22" color="#78350F" />
        <p v-else class="text-gray-600 text-xl">{{dashboardData.countPayment}}</p>
      </div>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-md">
      <LoadingIcon v-if="loading"  stroke="4" size="22" color="#78350F" />
      <canvas  ref="chartRef" height="120"></canvas>
    </div>
  </div>
</template>
