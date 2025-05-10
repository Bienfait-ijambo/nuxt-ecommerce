<script setup lang="ts">
// const { addToWishlist, removeFromWishlist, isInList } = useWishlist();

// const { product } = defineProps<{ product: Product }>();

const isWishlisted = ref(true)

function toggleWishlist(){
  console.log('...')
}

// const toggleWishlist = () => (isWishlisted.value && product.databaseId ? removeFromWishlist(product.databaseId) : addToWishlist(product));
</script>

<template>
  <button type="button" class="cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center" @click="toggleWishlist">
    <Icon v-if="isWishlisted" name="ion:heart" size="18" class="text-red-400" />
    <Icon v-else name="ion:heart-outline" size="18" />
    <span>{{ isWishlisted ?'Remove': 'Add' }}</span>
  </button>
</template>
