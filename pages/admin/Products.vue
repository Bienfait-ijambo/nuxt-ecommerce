<script setup>
definePageMeta({
  layout: "admin",
});

const showModal = ref(false);

const productStore = useProductStore();
const {
  productInput,
  showUploadedImageModal,
  uploadProductImages,
  edit,
  productData,
  productId,
  showUploadImageModal,
} = storeToRefs(productStore);

function toggleProductModal() {
  showModal.value = !showModal.value;
}

const categoryStore = useCategoryStore();
const { data, getCategories } = await categoryStore.fetchCategories();

await productStore.fetchProducts();

async function deleteProduct(product) {
  promptUser("Do you want to delete this ?")
    .then(async () => {
      await productStore.deleteProduct(product?.id);
      productStore.fetchProducts();
    })
    .catch((error) => console.log(error?.message));
}

function editProduct(product) {
  productInput.value = product;
  edit.value = true;
  toggleProductModal();
}

function uploadImage(product) {
  productId.value = product?.id;
  showUploadImageModal.value = true;
}
function showUploadedImages(product) {
  uploadProductImages.value = product?.images;
  showUploadedImageModal.value = true;
}
</script>
<template>
  <div class="h-screen">
    <div class="flex justify-end mb-4 pt-4">
      <ClientOnly>
        <UploadImage @getProducts="productStore.fetchProducts" />
        <UploadedImageModal />
        <ProductModal
          :categories="data?.categories"
          @getProducts="productStore.fetchProducts"
          :show="showModal"
          @toggleProductModal="toggleProductModal"
        ></ProductModal>
      </ClientOnly>
    </div>

    <ProductTable
      :productData="productData"
      @showUploadedImages="showUploadedImages"
      @uploadImage="uploadImage"
      @deleteProduct="deleteProduct"
      @editProduct="editProduct"
    >
      <template #btn>
        <BaseBtn label="create" @click="toggleProductModal"></BaseBtn>
      </template>
    </ProductTable>
  </div>
</template>
