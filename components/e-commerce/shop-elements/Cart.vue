<script setup>

const shoppingCartStore=useShoppingCartStore()
const {shoppingCartData,totalPrice}=storeToRefs(shoppingCartStore)


onMounted(()=>{
  shoppingCartStore.getCartDataFromLocalStorage()
})
</script>

<template>
  <div class="fixed top-0 bottom-0 right-0 z-50 flex flex-col w-11/12 max-w-lg overflow-x-hidden bg-white shadow-lg">
    <Icon @click="shoppingCartStore.toggleShoppingCart" name="ion:close-outline" class="absolute p-1 rounded-lg shadow-lg top-6 left-6 md:left-8 cursor-pointer" size="34"  />
    <EmptyCart @click="shoppingCartStore.clearOutCart" class="rounded-lg shadow-lg p-1.5 hover:bg-red-400 hover:text-white" />

    <div class="mt-8 text-center">
      Cart <span> ({{shoppingCartData.length}}) </span>
      
    </div>

        <ul class="flex flex-col flex-1 gap-4 p-6 overflow-y-scroll md:p-8">
          <CartCard  :products="shoppingCartData"/>

          

        </ul>
        <div class="px-8 mb-8">
          <NuxtLink
            class="block p-3 text-lg text-center text-white bg-gray-800 rounded-lg shadow-md justify-evenly hover:bg-gray-900"
            to="/checkout"
           
            >
            <span class="mx-2">Check out</span>
            <span v-html="shoppingCartStore.formatToUsCurreny(totalPrice)" />
          </NuxtLink>
        </div>
      <!-- Empty Cart Message -->
      <!-- <EmptyCartMessage /> -->
      
    <!-- Cart Loading Overlay -->
    <!-- <div  class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-25">
      <LoadingIcon />
    </div> -->
  </div>
</template>
