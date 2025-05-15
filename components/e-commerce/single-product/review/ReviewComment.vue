



<script setup>
const productReviewStore=useProductReviewStore()
const {productReviewData}=storeToRefs(productReviewStore)
 const config=useRuntimeConfig()
 
 const DEFAULT_USER_AVATAR=config?.public?.DEFAULT_USER_AVATAR
 
 

</script>
<template>
<div class="divide-y flex-1" 
v-for="productReview in productReviewData?.productReviews"
:key="productReview?.id">
      
       <div  class="my-2 py-8"
       v-for="customerReview in productReview?.reviews"
       :key="customerReview?.id"
       >
        <div class="flex gap-4 items-center">
       
          <img :src="DEFAULT_USER_AVATAR" class="rounded-full h-12 w-12" />
          <div class="grid gap-1">
            <div class="text-sm gap-3">
              <span class="font-semibold">userName-{{customerReview?.userId}}</span>
              <span class="italic text-gray-400 px-4">
                {{customerReview?.createdAt}}</span
              >
            </div>
            <StarRating :rating="customerReview?.starNumber" :hide-count="true" class="text-sm" />
          </div>
        </div>
        <div class="mt-4 text-gray-700 italic prose-sm">
          {{customerReview?.comment}}
        </div>
      </div>

    </div>
</template>