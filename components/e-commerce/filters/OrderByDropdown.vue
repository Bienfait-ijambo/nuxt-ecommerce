<script setup>
// const { getOrderQuery, setOrderQuery } = await useSorting();
// const { storeSettings } = useAppConfig();
// const selectedOrder = ref(getOrderQuery());
const orderby = ref('');
const order = ref('');

// // Update the URL when the checkbox is changed
// watch([orderby, order], () => {
//   setOrderQuery(orderby.value, order.value);
// });
</script>

<template>
  <div class="inline-flex ml-auto -space-x-px shadow-sm rounded-m isolate">
    <button
      class="relative inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-20"
      aria-label="Sort"
      @click="order = order === 'ASC' ? 'DESC' : 'ASC'">
      <Icon name="ion:filter-outline" size="18" :class="order === 'ASC' ? 'rotate-180' : ''" class="transition-transform transform transform-origin-center" />
    </button>
    <select id="orderby-dropdown" v-model="orderby" class="bg-white rounded-l-none" aria-label="Order by">
      <option value="date">Latest</option>
      <option value="alphabetically">A</option>
      <option value="price">Price</option>
      <option value="rating">Rating</option>
      <option value="discount">Discount</option>
    </select>
  </div>
</template>
