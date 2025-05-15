<script setup lang="ts">
defineProps({
  rating: { type: Number, default: 0 },
  count: { type: Number, default: null },
  hideCount: { type: Boolean, default: false },
  size: { type: Number, default: 14 },
});
</script>

<template>
  <div class="inline-flex items-center">
    <!-- yellow bg -->
    <StarIcon v-for="i in rating" :key="i"  :size="size + ''"
    :fill="'#FBBE24'"
     class="mr-[2px]" 
    :style="{ color: rating < i ? '#ccc' : '#FBBE24' }" />

    <!-- gray bg -->
    <StarIcon v-for="i in rating <5?(Math.abs(rating-5)):0" :key="i" 
    :fill="'none'"
     :size="size + ''" class="mr-[2px]" 
    :style="{ color: rating < i ? '#ccc' : '#ccc' }" />
  </div>
</template>
