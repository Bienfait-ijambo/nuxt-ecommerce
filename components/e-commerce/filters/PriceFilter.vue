<script setup>
import Slider from '@vueform/slider';

const emit=defineEmits(['fetchProducts'])

const minPrice=0
const maxPrice = 1000;
const currencySymbol =  '$';

const activeFilters = ref(null);
const price = ref([minPrice,maxPrice])
const isOpen = ref(true);



const applyPrice = async () => {
await emit('fetchProducts',price.value)
};


</script>

<template>
  <div>
    <div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center" @click="isOpen = !isOpen">
      <span>Price</span> 
      <Icon name="ion:chevron-down-outline" class="transform" :class="isOpen ? 'rotate-180' : ''" />
    </div>
    <div v-show="isOpen" class="mt-3 grid gap-4 grid-cols-2">
      <div class="flex relative items-center">
        <input
          id="price-from"
          v-model="price[0]"
          class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm"
          type="number"
          placeholder="From"
          min="0" />
        <label for="price-from" class="leading-none px-2 text-gray-400 absolute" v-html="currencySymbol" />
      </div>
      <div class="flex relative items-center">
        <input
          id="price-to"
          v-model="price[1]"
          class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm"
          type="number"
          placeholder="Up to"
          min="1" />
        <label for="price-to" class="leading-none px-2 text-gray-400 absolute" v-html="currencySymbol" />
      </div>
      <div class="mx-1 mt-1 col-span-full">
        <Slider v-model="price" :tooltips="false" :min="0" :max="maxPrice" ariaLabelledby="price-from price-to" @update="applyPrice"  />
      </div>
    </div>
  </div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
