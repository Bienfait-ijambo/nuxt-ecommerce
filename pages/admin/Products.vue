<script setup>
definePageMeta({
  layout: "admin",
});

const showModal = ref(false);

function toggleProductModal() {
  showModal.value = !showModal.value;
}

const productStore = useProductStore();
const { productInput, edit, productData } = storeToRefs(productStore);

const categoryStore = useCategoryStore();
const { data, getCategories } = await categoryStore.fetchCategories();
// const {getProducts}=

await productStore.fetchProducts();

async function deleteProduct(product){
promptUser('Do you want to delete this ?').then(async()=>{
  await productStore.deleteProduct(product?.id)
  productStore.fetchProducts()

}).catch((error)=>console.log(error?.message))
   
}

function editProduct(product) {
  productInput.value = product;
  edit.value = true;
  toggleProductModal();
}
</script>
<template>
  <div class="h-screen">
    <div class="flex justify-end mb-4 pt-4">
      <ProductModal
        :categories="data?.categories"
        @getProducts="productStore.fetchProducts"
        :show="showModal"
        @toggleProductModal="toggleProductModal"
      ></ProductModal>
    </div>
  
    <ProductTable :productData="productData"
     @deleteProduct="deleteProduct"
      @editProduct="editProduct">
      <template #btn>
        <BaseBtn label="create" @click="toggleProductModal"></BaseBtn>
      </template>
    </ProductTable>
  </div>
</template>
