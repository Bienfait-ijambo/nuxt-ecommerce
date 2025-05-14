<script setup>
const quantity = ref(1);
const route = useRoute();

const productEcomStore = useProductEcomStore();
const { fetchSingleProductData, singleProductData, sameCategoryProduct } =
  storeToRefs(productEcomStore);

await productEcomStore.fetchSingleProductData(route.params?.slug);
</script>

<template>
  <main class="container relative py-6 xl:max-w-7xl">
    <div>
      <Breadcrumb class="mb-6" />
      <div
        class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24"
      >
        <ProductImageGallery
          :images="singleProductData?.products?.images"
          class="relative flex-1"
        />
        <!-- <NuxtImg v-else class="relative flex-1 skeleton" src="/images/placeholder.jpg" :alt="product?.name || 'Product'" /> -->

        <div class="lg:max-w-md xl:max-w-lg md:py-2 w-full">
          <div class="flex justify-between mb-4">
            <div class="flex-1">
              <h1
                class="flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold"
              >
                {{ singleProductData?.products?.name }}
              </h1>
              <StarRating />
            </div>
            <ProductPrice
              class="text-xl"
              :sale-price="singleProductData?.products?.price + '$'"
              :regular-price="'14 $'"
            />
          </div>


          <hr />

          <form>
            <!-- <AttributeSelections
              v-if="isVariableProduct && product.attributes && product.variations"
              class="mt-4 mb-8"
              :attributes="product.attributes.nodes"
              :defaultAttributes="product.defaultAttributes"
              :variations="product.variations.nodes"
              @attrs-changed="updateSelectedVariations" /> -->
            <div
              class="fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 bg-white md:static md:bg-transparent bg-opacity-90 md:p-0"
            >
              <input
                v-model="quantity"
                type="number"
                min="1"
                aria-label="Quantity"
                class="bg-white border rounded-lg flex text-left p-2.5 w-20 gap-4 items-center justify-center focus:outline-none"
              />
              <AddToCartButton
                class="flex-1 w-full md:max-w-xs"
                :disabled="false"
                :class="{ loading: true }"
              />
            </div>
            <!-- <a
              v-if="isExternalProduct && product.externalUrl"
              :href="product.externalUrl"
              target="_blank"
              class="rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none">
              {{ product?.buttonText || 'View product' }}
            </a> -->
          </form>

          <div>
            <div class="grid gap-2 my-8 text-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-400">Category :</span>
                <div class="product-categories">
                  <NuxtLink class="hover:text-primary" title="category-name"
                    >Category-name<span class="comma">, </span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <div class="flex flex-wrap gap-4">
            <WishlistButton />
          </div>
        </div>
      </div>
      <div class="my-32">
        <ProductTabs />
      </div>

      <div class="my-32">
        <div class="mb-4 text-xl font-semibold">
          You May Also Like <Icon name="uil:github" />
        </div>
        <!-- <LazyProductRow :productData="sameCategoryProduct" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5" /> -->
      </div>
    </div>
  </main>
</template>

<style scoped>
.product-categories > a:last-child .comma {
  display: none;
}

input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}
</style>
