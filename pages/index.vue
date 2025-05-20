
<script setup>
const shoppingCartStore=useShoppingCartStore()
const {showCart}=storeToRefs(shoppingCartStore)

</script>

<template>
  <div class="container flex items-start gap-16" >
    <Filters />
     <Cart v-show="showCart"/>
   
    <div class="w-full">
      <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
      
      </div>
      <ProductGrid />
    </div>
  </div>
  <!-- <NoProductsFound v-else>Could not fetch products from your store. Please check your configuration.</NoProductsFound> -->
</template>
