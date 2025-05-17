import { defineStore } from "pinia";

export const useProductEcomStore = defineStore('product-Ecom-store', () => {

    const productData = ref<any>(null)
    const page = ref(1)
    const limit = ref(10)

    const selectedCategories = ref<number[]>([])
    const selectedPrices = ref<number[]>([])
    const selectedColors = ref<string[]>([])
    const singleProductData = ref<any>(null)
    const sameCategoryProduct = ref<any>({ products: [] })
    const selectedStar=ref<number>()
 



    async function fetchProducts(categories?: number[], prices?: number[], colors?: string[],
        starRating?:number
    ) {

        
  const params:Record<string,any>={}

            if(categories &&categories?.length>0){
                params['categories']=categories.toString()
            } 
             if(prices && prices?.length>0){
                params['prices']=prices.toString()
            } 
             if(colors && colors?.length>0){
                params['colors']=colors.toString()
            } 

            if(starRating && typeof starRating==='number'){
                params['starRating']=starRating
            } 
        
      
        const { data, refresh } = await useFetch("/api/e-commerce/get-product", {
            
            query: {
              ...params,
                page: page.value,
                limit: limit.value
            }
        });

        productData.value = data.value
        limit.value = productData.value?.metadata.limit
        page.value = productData.value?.metadata.page


    }



    async function fetchProductWithSameCategory(categoryId: number) {

        const { data, refresh } = await useFetch("/api/e-commerce/get-same-category-product", {
            query: {
                categoryId: categoryId,

            }
        });

        sameCategoryProduct.value = data.value



    }

    async function fetchSingleProductData(slug: string) {

        const { data, refresh } = await useFetch("/api/e-commerce/single-product", {
            query: {
                slug: slug,

            }
        });

        singleProductData.value = data.value
       


    }







    return { fetchProductWithSameCategory,selectedStar, productData, fetchProducts, selectedCategories, selectedPrices, selectedColors, sameCategoryProduct, fetchSingleProductData, singleProductData }
})