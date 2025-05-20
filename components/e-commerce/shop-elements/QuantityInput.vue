<script setup >
const props=defineProps(['quantity','productId'])
const emit=defineEmits(['addQuantity','reduceQuantity'])
const DEFAULT_QANTITY_TO_REDUCE=1

</script>

<template>
  <div class="flex rounded bg-white text-sm leading-none shadow-sm shadow-gray-200 isolate">
    <button
      title="Decrease Quantity"
      aria-label="Decrease Quantity"
       @click="emit('reduceQuantity',props.productId,DEFAULT_QANTITY_TO_REDUCE)"
      type="button"
      class="focus:outline-none border-r w-6 h-6 border rounded-l border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed"
     
      >

      <Icon name="ion:remove" size="14" />
    </button>
    <input
      type="number"
      v-model="props.quantity"
      min="0"
      aria-label="Quantity"
      
      class="flex items-center justify-center w-8 px-2 text-right text-xs focus:outline-none border-y border-gray-300" />
    <button
      title="Increase Quantity"
      aria-label="Increase Quantity"
      @click="emit('addQuantity',props.productId,props.quantity)"
      type="button"
      class="focus:outline-none border-l w-6 h-6 border rounded-r hover:bg-gray-50 border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-100"
     
      >
       <!-- :disabled="isUpdatingCart || hasNoMoreStock" -->
      <Icon name="ion:add" size="14" />
    </button>
  </div>
</template>

<style scoped lang="postcss">
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
