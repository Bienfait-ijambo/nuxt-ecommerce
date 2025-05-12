<script setup>
const props = defineProps({
  products: { type: Array, default: null },
});
</script>

<template>
  <div  class="grid gap-8">
    <ProductCard
      class="w-full"
      :class="{
        hidden: i === products.length - 1,
        'lg:block': i === products.length - 1,
      }" />
  </div>
</template>
