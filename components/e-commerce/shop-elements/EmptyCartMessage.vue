<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center justify-center flex-1 mb-20 text-gray-400">
    <!-- <Icon name="ion:cart-outline" size="96" class="opacity-75 mb-5" /> -->

 
     <CartIcon />
    <div class="mb-2 text-xl font-semibold">Your cart is empty.</div>
    <span class="mb-8">Please, add some products to your cart.</span>
    <NuxtLink
      to="/products"
      class="flex items-center justify-center gap-3 p-2 px-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark">
      Browse our products
    </NuxtLink>
  </div>
</template>
