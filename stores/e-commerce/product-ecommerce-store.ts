import { defineStore } from "pinia";

export const useProductEcomStore = defineStore('product-Ecom-store', () => {
   
    const productData = ref<any>(null)
    const page = ref(1)
    const limit = ref(10)

 


    async function fetchProducts() {

        const { data, refresh } = await useFetch("/api/e-commerce/get-product", {
         
            query: {
                page: page.value,
                limit: limit.value
            }
        });

        productData.value = data.value
        limit.value = productData.value?.metadata.limit
        page.value = productData.value?.metadata.page




    }


 





    return {  productData, fetchProducts, }
})