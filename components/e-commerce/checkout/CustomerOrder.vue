<script setup>
const props = defineProps(["userOders"]);
const config=useRuntimeConfig()

const FALL_BACK_IMG_URL=config?.public?.FALL_BACK_IMG_URL



</script>
<template>
     <h1 class="text-xl font-semibold mt-5 mb-4">Completed orders</h1>
  <table class="bg-white rounded-md w-full shadow-md border border-gray-300">
    <thead>
      <tr class="bg-gray-100 text-left">
        <td class="border border-gray-300 py-2 px-4">#</td>
        <td class="border border-gray-300 py-2 px-4">Product-image</td>
        <td class="border border-gray-300 py-2 px-4">Product-name</td>
        <td class="border border-gray-300 py-2 px-4">Amount(USD)</td>
        <td class="border border-gray-300 py-2 px-4">Date</td>
      </tr>
    </thead>

    <tbody>
      <tr
        class="text-left"
         v-for="order in userOders" :key="order?.id"
       
      >
        <td class="border border-gray-300 py-2 px-4">
          {{order?.id}}
        </td>
        <td class="border border-gray-300 py-2 px-4">
           <NuxtLink :to="'/product/'+order?.product?.slug">
        <NuxtImg
          width="64"
          height="64"
          class="w-16 h-16 rounded-md skeleton"
          :src="order?.product?.images.length >0?order?.product?.images[0]?.url:FALL_BACK_IMG_URL"
          :alt="'product name'"
          :title="'product name'"
          loading="lazy" />
      </NuxtLink>
        </td>
         <td class="border border-gray-300 py-2 px-4">
          {{order?.product?.name}}
        </td>
         <td class="border border-gray-300 py-2 px-4">
           {{order?.amount}}
        </td>
         <td class="border border-gray-300 py-2 px-4">
           {{order?.createdAt}}
        </td>

       
      </tr>
    </tbody>
  </table>
</template>
