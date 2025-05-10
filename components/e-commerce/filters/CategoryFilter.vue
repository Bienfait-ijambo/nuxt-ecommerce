<script setup>

const props = defineProps({
  categories: { type: Array, required: true },
  label: { type: String, default: '' },
  showCount: { type: Boolean, default: false },
});

const isOpen = ref(true)
const selectedTerms = ref([]);

const route = useRoute();
// const categorySlug = route.params.categorySlug;
// if (categorySlug) selectedTerms.value = [categorySlug];


// Update the URL when the checkbox is changed
const checkboxChanged = () => {
//   setFilter('category', selectedTerms.value);
console.log('hello')
};
</script>

<template>
  <div v-if="categories.length">
    <div class="cursor-pointer flex font-semibold mt-8 justify-between items-center" @click="isOpen = !isOpen">
      <span>Categories</span>
      <Icon name="ion:chevron-down-outline" class="transform" :class="isOpen ? 'rotate-180' : ''" />
    </div>
    <div v-show="isOpen" class="mt-3 mr-1 max-h-[240px] grid gap-1.5 overflow-auto custom-scrollbar">
      <div v-for="category in categories" :key="category" class="flex gap-2 items-start">
        <input :id="category" v-model="selectedTerms" type="checkbox" :value="category?.id" @change="checkboxChanged" />
        <label :for="category" class="cursor-pointer m-0 text-sm flex-1 leading-tight">
          <span v-html="category.name" />
          <small v-if="showCount" class="ml-1 text-gray-400 tabular-nums" aria-hidden="true">({{ categories.length || 0 }})</small>
        </label>
      </div>
    </div>
  </div>
</template>
