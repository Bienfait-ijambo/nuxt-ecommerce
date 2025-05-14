<script setup>

</script>

<template>
  <SwipeCard >
    <!-- @remove="removeItem" -->
      <!-- v-if="productType" -->
    <div class="flex items-center gap-3 group">
      <NuxtLink :to="'/slug '">
        <NuxtImg
          width="64"
          height="64"
          class="w-16 h-16 rounded-md skeleton"
          src="http://localhost:3000/images/placeholder.jpg"
          :alt="'product name'"
          :title="'product name'"
          loading="lazy" />
      </NuxtLink>
      <div class="flex-1">
        <div class="flex gap-x-2 gap-y-1 flex-wrap items-center">
          <NuxtLink class="leading-tight" :to="'productSlug'">Woo ninja</NuxtLink>
          <span  class="text-[10px] border-green-200 leading-none bg-green-100 inline-block p-0.5 rounded text-green-600 border">
            Save 78%
          </span>
          <!-- <span v-if="isLowStock" class="text-[10px] border-yellow-200 leading-none bg-yellow-100 inline-block p-0.5 rounded text-orange-500 border">
            Low Stock
          </span> -->
        </div>
         <ProductPrice class="mt-1 text-xs"  :sale-price=" '120 $'" :regular-price="'14 $'" />
      </div>
      <div class="inline-flex gap-2 flex-col items-end">
        <QuantityInput/>
        <div class="text-xs text-gray-400 group-hover:text-gray-700 flex leading-none items-center">
          <!-- <button v-if="storeSettings.showMoveToWishlist" class="mr-2 pr-2 border-r" @click="moveToWishList" type="button">Move to Wishlist</button> -->
          <button
            title="Remove Item"
            aria-label="Remove Item"
            type="button"
            class="flex items-center gap-1 hover:text-red-500 cursor-pointer">
            <Icon name="ion:trash" class="hidden md:inline-block" size="12" />
          </button>
        </div>
      </div>
    </div>
  </SwipeCard>
</template>
