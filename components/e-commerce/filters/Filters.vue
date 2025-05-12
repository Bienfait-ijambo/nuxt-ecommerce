<script setup lang="ts">


const attributesWithTerms=ref([{slug:"pa_colour",name:"red"}])

const categoryStore=useCategoryStore()
const {data}=await categoryStore.fetchCategories()
const productStore=useProductStore()
const {productColors}=storeToRefs(productStore)

const productEcomStore=useProductEcomStore()
const {selectedCategories,selectedPrices,selectedColors}=storeToRefs(productEcomStore)


async function fetchProductByCategories(categories:number[]){
  selectedCategories.value=categories
  await productEcomStore.fetchProducts(selectedCategories.value,selectedPrices.value,selectedColors.value)
}
async function fetchProductByColors(colors:string[]){
  selectedColors.value=colors
  await productEcomStore.fetchProducts(selectedCategories.value,selectedPrices.value,selectedColors.value)
}

async function fetchProductByPrice(prices:number[]){
   selectedPrices.value=prices
  await productEcomStore.fetchProducts(selectedCategories.value,selectedPrices.value,selectedColors.value)

}



</script>

<template>
  <aside id="filters">
    <OrderByDropdown class="block w-full md:hidden" />
    <div class="relative z-30 grid mb-12 space-y-8 divide-y">
      <PriceFilter @fetchProducts="fetchProductByPrice" />
      <CategoryFilter @fetchProducts="fetchProductByCategories" :categories="data?.categories" />

      <div v-for="attribute in attributesWithTerms" :key="attribute.slug">
        <ColorFilter @fetchProducts="fetchProductByColors" :colors="productColors" />
        <!-- <GlobalFilter /> -->
      </div>

      <LazyStarRatingFilter  />
      <!-- <OnSaleFilter /> -->
      <LazyResetFiltersButton  />
    </div>
  </aside>
  <!-- @click="removeBodyClass('show-filters')" -->
  <div class="fixed inset-0 z-50 hidden bg-black opacity-25 filter-overlay" ></div>
</template>

<style lang="postcss">
.show-filters .filter-overlay {
  @apply block;
}
.show-filters {
  overflow: hidden;
}

#filters {
  @apply w-[280px];

  & .slider-connect {
    @apply bg-primary;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

.price-input {
  @apply border rounded-xl outline-none leading-tight w-full p-2 transition-all;

  &.active {
    @apply border-gray-400 pl-6;
  }
}

@media (max-width: 768px) {
  #filters {
    @apply bg-white h-full p-8 transform pl-2 transition-all ease-in-out bottom-0 left-4 -translate-x-[110vw] duration-300 overflow-auto fixed;

    box-shadow:
      -100px 0 0 white,
      -200px 0 0 white,
      -300px 0 0 white;
    z-index: 60;
  }

  .show-filters #filters {
    @apply transform-none;
  }
}
</style>
