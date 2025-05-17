<script setup>
const props = defineProps({
  reviews: { type: Object, default: null },
  productId: { type: Number, default: null },
  size: { type: Number, default: 21 },
});

const show = ref(false);

const productEcomStore = useProductEcomStore();
const { singleProductData } = storeToRefs(productEcomStore);

function displayMissingStars(starPercents) {
  if (Array.isArray(starPercents)) {
    const newStarPercents = [];
    const stars = [1, 2, 3, 4, 5];

    stars.forEach((star) => {
      const exist = starPercents.filter((item) => item.star === star);
      if (exist.length > 0) {
        newStarPercents.push(exist[0]);
      } else {
        newStarPercents.push({
          id: null,
          productId: null,
          times: 0,
          star: star,
        });
      }
    });

    return newStarPercents;
  }
}
</script>

<template>
  <div>
    <h4 class="font-semibold text-2xl text-gray-900">Customer Reviews</h4>
    <div class="my-2">
      <StarRating
        :rating="computeProductReview(singleProductData?.products)"
        class="text-sm mr-2"
      />
    </div>
    <div class="my-4 bars">
      <!-- percent -->
      <div
        v-for="rating in displayMissingStars(
          singleProductData?.products?.starPercents
        )"
        :key="rating"
        class="flex gap-4 items-center"
      >
        <div class="flex text-sm gap-1 items-center">
          {{ rating?.star }}
          <Icon class="text-yellow-400" name="ion:star" />
        </div>
        <div class="flex-1 relative">
          <div class="rounded-full bg-gray-200 h-2.5 w-full"></div>
          <div
            class="rounded-full bg-yellow-400 h-2.5 top-0 left-0 absolute"
            :style="{
              width:
                (rating?.star * rating?.times * 100) / (5 * rating?.times) +
                '%',
            }"
          ></div>
        </div>
      </div>
    </div>
    <div class="mt-10 text-xl mb-2 text-gray-900">Share your thoughts</div>
    <div class="text-sm mb-4">
      If you have used this product, we would love to hear about your
      experience.
    </div>
    <button
      @click="show = !show"
      class="border rounded-lg text-center w-full p-2"
    >
      {{ show ? "Close" : "Write a review" }}
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
