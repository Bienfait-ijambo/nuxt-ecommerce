<script setup>
// const { cart, isUpdatingCart } = useCart();
</script>

<template>
  <aside class="bg-white rounded-lg shadow-lg mb-8 w-full min-h-[280px] p-4 sm:p-8 relative md:max-w-md md:top-32 md:sticky">
    <h2 class="mb-6 text-xl font-semibold leading-none">Order Summary</h2>

    <ul class="flex flex-col gap-4 overflow-y-auto">
      <!-- <CartCard v-for="item in cart.contents.nodes" :key="item.key" :item /> -->
    </ul>


    <div class="grid gap-1 text-sm font-semibold text-gray-500">
     
      <div class="flex justify-between mt-4">
        <span>Total</span>
        <span class="text-lg font-bold text-gray-700 tabular-nums" v-html="'$100'" />
      </div>
    </div>

    <slot></slot>

  </aside>
</template>
