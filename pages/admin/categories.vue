<script setup>
definePageMeta({
  layout: "admin",
});

const showModal=ref(false)

function toggleCategoryModal(){
showModal.value=!showModal.value
}

const data=await useFetch('/api/admin/category/get-categories')

</script>
<template>
  <div class="h-screen">
    <div class="flex justify-end mb-4 pt-4">
        <BaseBtn label="create" @click="toggleCategoryModal"></BaseBtn>
 
      <CategoryModal :show="showModal" @toggleCategoryModal="toggleCategoryModal"></CategoryModal>
    </div>
<!-- {{ data }} -->
{{ data?.data?.categories }}
    <CategoryTable :categories="data?.data?.categories"></CategoryTable>
  </div>
</template>
