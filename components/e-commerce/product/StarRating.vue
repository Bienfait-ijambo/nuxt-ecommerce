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

  
    <StarIcon v-for="i in rating" :key="i"  :size="size + ''" class="mr-[2px]" 
    :style="{ color: rating < i ? '#ccc' : '#FBBE24' }" />

    
    <span v-if="count !== null && !hideCount" class="text-xs ml-1 text-gray-500">({{ count }})</span>
  </div>
</template>
