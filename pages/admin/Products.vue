<script setup>
definePageMeta({
  layout: "admin",
});

const showModal = ref(false);

function toggleProductModal() {
  showModal.value = !showModal.value;
}

// const {data,refresh:getCategories}=await useFetch("/api/admin/category/get-categories",{
//   headers: {
//       Accept: "application/json",
//       // Authorization: `Bearer ${userData?.token}`,
//     },
// });


const productStore=useProductStore()
const {productInput,edit}=storeToRefs(productStore)


function editProduct(product){
  productInput.value=product
  edit.value=true
  toggleProductModal()
}
</script>
<template>
  <div class="h-screen">
    <div class="flex justify-end mb-4 pt-4">
      <BaseBtn label="create" @click="toggleProductModal"></BaseBtn>
      
      <ProductModal
    
        :show="showModal"
        @toggleProductModal="toggleProductModal"
      ></ProductModal>
    </div>
  
    <!-- <CategoryTable @editCategory="editCategory" :categories="data?.categories" ></CategoryTable> -->
  </div>
</template>
