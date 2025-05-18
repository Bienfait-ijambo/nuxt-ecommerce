<script setup>

const props = defineProps({
  disabled: { type: Boolean, default: false },
});
const isLoading = ref(false);

</script>

<template>
  <button
    type="submit"
    class="rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none"
    :class="{ disabled: false }"
    :disabled="disabled"
   >
    <span>Add to cart</span>
    <LoadingIcon v-if="isLoading" stroke="4" size="12" color="#fff" />
  </button>
</template>

<style lang="postcss" scoped>
button {
  outline: none !important;
  transition: all 150ms ease-in;
}

button.disabled {
  @apply cursor-not-allowed bg-gray-400;
}
</style>
