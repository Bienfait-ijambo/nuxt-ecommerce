<script setup>

</script>

<template>
  <div class="flex flex-wrap gap-32 items-start">
    <div class="flex max-w-sm gap-4 prose">
      <!-- <ReviewsScore v-if="product.reviews" :reviews="product.reviews" :productId="product.databaseId" /> -->
    </div>
    <div class="divide-y flex-1">
      <div  class="my-2 py-8">
        <div class="flex gap-4 items-center">
          review image here
          <!-- <img v-if="review.node.author.node.avatar" :src="review.node.author.node.avatar.url" class="rounded-full h-12 w-12" /> -->
          <div class="grid gap-1">
            <div class="text-sm">
              <span class="font-semibold">node name</span>
              <span class="italic text-gray-400">
                Review date</span
              >
            </div>
            <!-- <StarRating :rating="review.rating" :hide-count="true" class="text-sm" /> -->
          </div>
        </div>
        <div class="mt-4 text-gray-700 italic prose-sm">
          review content here
        </div>
      </div>
       <div  class="my-2 py-8">
        <div class="flex gap-4 items-center">
          review image here
          <!-- <img v-if="review.node.author.node.avatar" :src="review.node.author.node.avatar.url" class="rounded-full h-12 w-12" /> -->
          <div class="grid gap-1">
            <div class="text-sm">
              <span class="font-semibold">node name</span>
              <span class="italic text-gray-400">
                Review date</span
              >
            </div>
            <!-- <StarRating :rating="review.rating" :hide-count="true" class="text-sm" /> -->
          </div>
        </div>
        <div class="mt-4 text-gray-700 italic prose-sm">
          review content here
        </div>
      </div>
    </div>
  </div>
</template>
