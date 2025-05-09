<script setup>

const productStore=useProductStore()
const{showUploadedImageModal,uploadProductImages}=storeToRefs(productStore)

</script>
<template>
  <BaseModal :show="showUploadedImageModal">
    <template #title>
      <div class="text-2xl font-semibold">Uploaded Images</div>
    </template>

    <template #body>
        <div class="flex flex-wrap gap-4" >

            <img v-for="image in uploadProductImages"
            :key="image.url"
            :src="image.url"
             style="height: 100px" 
             alt="image" />
        </div>
   
    </template>

    <template #footer>
   
      <BaseBtn class="bg-slate-400" 
      @click="showUploadedImageModal = false"
      label="Close"></BaseBtn>
      

    </template>
  </BaseModal>
</template>
