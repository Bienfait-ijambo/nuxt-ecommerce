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



Hello, this is Ben, in this video we gonna build & deploy a real-time
ecommerce app, our app has two side client side and .

Before a given user access, his account first he has to create to create an account by providing his name,email and password then we gonna send him and email verification, we use mailtrap for testing, on he received the code can pass it to otp input and then access his account.

on the admin side we have the dashboard page where we can see analytics about sales in real-Time, know the total amount gain daily by walking through the chart.  

eg:If we make a payment we are going to update the dashboard data in real-time

we have categories page(create category) and  the product page where we can create product,add,delete,edit, add images for a product. moreover we gonna learn how to implement pagination

payment page to see all completed payment

user-page to view -all created user

now let's move to the client side, here the client can browser all products, filter by category,color,star-rating, once he likes a product can see details about or provide a review about a product.

And also he can see product that belongs to the same category. then he can pick a product and add it to cart, update quantity. move to the checkout page to process payment.
once payment pass we can gonna receive a payment into stripe dashboard.

TECH STACK
---------

now to develop this app we gonna use....prisma...

now guys let's have a look to our ecommerce website page stripe. present db-structure,prerequisites. 

gooooo.