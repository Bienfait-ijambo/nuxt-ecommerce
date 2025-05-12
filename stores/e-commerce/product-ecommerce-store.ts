import { defineStore } from "pinia";

export const useProductEcomStore = defineStore('product-Ecom-store', () => {
   
    const productData = ref<any>(null)
    const page = ref(1)
    const limit = ref(10)
    
    const selectedCategories=ref<number[]>([])
const selectedPrices=ref<number[]>([])
const selectedColors=ref<string[]>([])
const singleProductData=ref<any>(null)



    async function fetchProducts(categories?:number[],prices?:number[],colors?:string[]) {
    
        const { data, refresh } = await useFetch("/api/e-commerce/get-product", {
         
            query: {
                categories:categories ? categories.toString():[],
                prices:prices ? prices.toString():[],
                colors:colors ? colors.toString():[],
                page: page.value,
                limit: limit.value
            }
        });

        productData.value = data.value
        limit.value = productData.value?.metadata.limit
        page.value = productData.value?.metadata.page




    }


    
    async function fetchSingleProductData(slug:string) {
    
        const { data, refresh } = await useFetch("/api/e-commerce/single-product", {
            query: {
                slug:slug,
               
            }
        });

        singleProductData.value = data.value
      


    }

 





    return {  productData, fetchProducts,selectedCategories,selectedPrices,selectedColors,fetchSingleProductData,singleProductData }
})