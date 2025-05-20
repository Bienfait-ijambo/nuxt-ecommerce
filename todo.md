npx prisma migrate dev --name init : Initial the migration



TO DO LIST
----------


shopping-cart-store :
----------
- finish cart
- test payments

dashboard
- paying vs non-paying
- latest reviews[customer-name,avatar,product-name,stars-number]
- weekly sales
- total orders
- best selling-products


dashboard-idea:
-https://prium.github.io/phoenix/v1.22.0/
index.html?theme-control=true&navigation-type=vertical
- https://themes.getbootstrap.com/preview/?theme_id=19799









<script setup>
import { onMounted, ref } from 'vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

definePageMeta({ layout: 'admin' })

const dashboardData=ref(null)
const { data, refresh } = await useFetch("/api/admin/dashboard/dashboard-data");
dashboardData.value = data.value
    

const chartRef = ref(null)

const chartData = {
  labels: [
    'May 10', 'May 11', 'May 12', 'May 13', 'May 14',
    'May 15', 'May 16', 'May 17', 'May 18', 'May 19'
  ],
  datasets: [
    {
      label: 'Payments ($)',
      data: [120, 90, 150, 80, 200, 170, 60, 130, 95, 140],
      fill: false,
      borderColor: '#3b82f6',
      backgroundColor: '#cfe2ff',
      tension: 0.3,
      pointBackgroundColor: '#3b82f6'
    }
  ]
}


onMounted(() => {
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
    <h1 class="text-2xl mb-4">Dashboard</h1>
{{dashboardData}}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Earnings</h2>
        <p class="text-gray-600 text-xl">$12,430</p>
      </div>
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Customers</h2>
        <p class="text-gray-600 text-xl">2,320</p>
      </div>
      <div class="bg-white p-4 rounded-2xl shadow-md">
        <h2 class="text-xl font-semibold mb-3">Orders</h2>
        <p class="text-gray-600 text-xl">458</p>
      </div>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-md">
      <canvas ref="chartRef" height="120"></canvas>
    </div>
  </div>
</template>
