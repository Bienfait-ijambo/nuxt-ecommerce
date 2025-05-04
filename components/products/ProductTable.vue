<script setup>
const props = defineProps(["productData"]);

const emit=defineEmits(['editProduct','deleteProduct','uploadImage','showUploadedImages'])
const productStore=useProductStore()
const {search}=storeToRefs(productStore)



const searchProduct=_debounce(async function(event){
search.value=event[0].target.value
await productStore.fetchProducts()
},1000)

</script>
<template>
  
  <div class="flex justify-between mb-1">
        <input
        v-model="search"
          @keydown="searchProduct"
            placeholder="Search..."
            type="text"
            class="mb-2 border rounded-md py-2 px-2 shadow-md"
        />
        <slot name="btn"></slot>

    </div>
  <table class="bg-white rounded-md w-full shadow-sm border border-gray-300">
    <thead>
      <tr class="bg-gray-100 text-left" >
        <td class="border border-gray-300 py-2 px-4">#</td>
        
        <td class="border border-gray-300 py-2 px-4">Name</td>
        <td class="border border-gray-300 py-2 px-4">Category</td>
        <td class="border border-gray-300 py-2 px-4">Color</td>
        <td class="border border-gray-300 py-2 px-4">Price</td>

        <td class="border border-gray-300 py-2 px-4">Action</td>
      </tr>
    </thead>

    <tbody>

      <tr class=" text-left" v-for="(product,index) in productData?.products" :key="product.id">
        <td class="border border-gray-300 py-2 px-4">
          {{ index+1 }}
        </td>
        
        <td  class="border border-gray-300 py-2 px-4">{{product?.name}}</td>
        <td class="border border-gray-300 py-2 px-4">{{product?.category?.name}}</td>
        <td class="border border-gray-300 py-2 px-4">{{product?.color}}</td>
        <td class="border border-gray-300 py-2 px-4">{{product?.price}} $</td>

        <td class="flex border border-gray-300 py-2 px-4">
          <button
            @click="emit('editProduct',product)"
            class="flex justify-center hover:bg-slate-200 text-gray-900 font-bold py-2 px-4 rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <EditIcon />

          </button>
          <button
            @click="emit('deleteProduct',product)"
            class="flex justify-center hover:bg-slate-200 text-gray-900 font-bold py-2 px-4 rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <TrashIcon />

          </button>

          <button
            @click="emit('uploadImage',product)"
            class="flex justify-center hover:bg-slate-200 text-gray-900 font-bold py-2 px-4 rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <ImageIcon />

          </button>

          <button
            @click="emit('showUploadedImages',product)"
            class="flex justify-center hover:bg-slate-200 text-gray-900 font-bold py-2 px-4 rounded flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            <EyeIcon />

          </button>
        </td>
      </tr>
      
    </tbody>
  </table>


  
<div class="flex justify-between items-center mt-4">
     
     <div>
       <button
         class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
         :disabled="productData?.metadata?.page === 1"
         @click="productStore.changePage(productData?.metadata?.page - 1)"
       >
         Prev
       </button>

       <span>Page {{ productData?.metadata?.page }} of {{ productData?.metadata?.totalPages }}</span>

       <button
         class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
         :disabled="productData?.metadata?.page === productData?.metadata?.totalPages"
         @click="productStore.changePage(productData?.metadata?.page  + 1)"
       >
         Next
       </button>
     </div>
     <div>
     </div>
      
     </div>
  

</template>
