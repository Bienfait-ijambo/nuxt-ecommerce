<script setup>

const shoppingCartStore=useShoppingCartStore()
const {shoppingCartData,showCart}=storeToRefs(shoppingCartStore)

</script>

<template>
  <div class="relative cursor-pointer inline-flex" title="Cart" @click="shoppingCartStore.toggleShoppingCart">
    <Icon name="ion:cart-outline" size="22" class="mr-1 md:mr-0" />
    
      <Transition name="popIn" mode="out-in">
      
      <span v-if="shoppingCartData.length>0?true:false" class="bg-primary rounded-full text-white leading-none absolute   min-w-[16px] p-[3px] -top-1 -right-4 md:-right-2 text-[10px]  inline-flex justify-center items-center">
          {{shoppingCartData.length}}
        </span> 
      </Transition>
  
  </div>
</template>

<style lang="postcss">
/* popIn */
.popIn-enter-active,
.popIn-leave-active {
  transition: all 200ms cubic-bezier(0, 0, 0.57, 1.61);
}

.popIn-enter-from,
.popIn-leave-to {
  transform: scale(0);
}
</style>
