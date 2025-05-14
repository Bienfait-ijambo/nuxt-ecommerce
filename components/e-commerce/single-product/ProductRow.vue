<script setup>
const props=defineProps(['productData'])
</script>

<template>
  <div  class="grid gap-8">
    <ProductCard
      class="w-full"
      :productData="productData"
       />

       <!-- :class="{
        hidden: i === products.length - 1,
        'lg:block': i === products.length - 1,
      }" -->
  </div>
</template>
