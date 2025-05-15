<script setup>
const props = defineProps({
  reviews: { type: Object, default: null },
  productId: { type: Number, default: null },
  size: { type: Number, default: 21 },
});

// const numberAndPercentageOfEachRating = computed(() => {
//   const ratings = [0, 0, 0, 0, 0];
//   props.reviews.edges.forEach((review) => {
//     ratings[review.rating - 1] += 1;
//   });
//   const total = ratings.reduce((a, b) => a + b, 0);
//   return ratings
//     .map((count, index) => {
//       const percentage = (count / total) * 100;
//       return { count, percentage, rating: index + 1 };
//     })
//     .reverse();
// });

const show = ref(false);
;
const content = ref(null);
const authorEmail = ref(null);
const errorMessage = ref('');
const successMessage = ref('');
const isPending = ref(false);

function setHovered(i) {
  hovered.value = i;
}

function resetHovered() {
  hovered.value = 0;
}

async function addComment() {
console.log('add comment...')
  
}
</script>

<template>
  <div>
    <h4 v-if="[1,2]" class="font-semibold text-2xl text-gray-900">Customer Reviews</h4>
    <h4 v-else class="font-semibold text-2xl text-gray-900">No Reviews yet</h4>
    <div class="my-2">
      <StarRating   class="text-sm mr-2" />
      <span class="text-sm"> Based on 1 Reviews</span>
    </div>
    <div class="my-4 bars">
        <!-- percent -->
      <div v-for="rating in [5,4,3,2,1]" :key="rating" class="flex gap-4 items-center">
        <div class="flex text-sm gap-1 items-center">
          {{ rating }}
          <Icon class="text-yellow-400" name="ion:star" />
        </div>
        <div class="flex-1 relative">
          <div class="rounded-full bg-gray-200 h-2.5 w-full"></div>
          <div class="rounded-full bg-yellow-400 h-2.5 top-0 left-0 absolute" :style="{ width: rating + '%' }"></div>
        </div>
      </div>
    </div>
    <div class="mt-10 text-xl mb-2 text-gray-900">Share your thoughts</div>
    <div class="text-sm mb-4">If you have used this product, we would love to hear about your experience.</div>
    <button @click="show = !show" class="border rounded-lg text-center w-full p-2">
      {{ show ? 'Close' : 'Write a review'}}
    </button>
   <!-- Review form -->
   <!-- Review form -->
   <!-- Review form -->

     <ReviewForm v-show="show"></ReviewForm>
    <!-- end Review form  -->
    <!-- end Review form  -->
    <!-- end Review form  -->

  </div>
</template>

