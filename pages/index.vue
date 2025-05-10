<script setup lang="ts">



</script>

<template>
  <div class="container flex items-start gap-16" >
    <Filters v-if="true" />

    <div class="w-full">
      <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
        <!-- <ProductResultCount /> -->
        <!-- <OrderByDropdown class="hidden md:inline-flex" v-if="storeSettings.showOrderByDropdown" /> -->
        <!-- <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" /> -->
      </div>
      <ProductGrid />
    </div>
  </div>
  <!-- <NoProductsFound v-else>Could not fetch products from your store. Please check your configuration.</NoProductsFound> -->
</template>
