<script setup >
const props=defineProps(['productData'])

const imgWidth = 280;
const imgHeight = Math.round(imgWidth * 1.125);
const config=useRuntimeConfig()

const FALL_BACK_IMG_URL=config?.public?.FALL_BACK_IMG_URL



</script>

<template>
  <div class="relative group" v-for="product in productData?.products" :key="product?.id">
    <NuxtLink :to="`/product/${product?.slug}`" :title="product?.name">
      <!-- <SaleBadge  class="absolute top-2 right-2" /> -->
      <NuxtImg
      
        :width="imgWidth"
        :height="imgHeight"
        :src="product?.images?.length >0?product?.images[0]?.url:FALL_BACK_IMG_URL"
        :alt="product?.name"
        :title="product?.name"
        
        :loading="'lazy'"
        :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
        class="rounded-lg object-top object-cover w-full aspect-9/8"
        
        placeholder-class="blur-xl" />
    </NuxtLink>
    <div class="p-2">

      <StarRating :rating="computeProductReview(product)" />

      <NuxtLink :to="`/product/${product?.slug}`" :title="product?.name">
        <h2 class="mb-2 font-light leading-tight group-hover:text-primary">{{product?.name}}</h2>
      </NuxtLink>
      <ProductPrice class="text-sm" :sale-price="product?.price +' $'" :regular-price="'14 $'" />
    </div>
  </div>

  

 
</template>
