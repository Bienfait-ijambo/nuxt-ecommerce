


import { defineStore } from "pinia";

export const useProductReviewStore = defineStore('product-review-store', () => {

   
    const productReviewData=ref<any>(null)


    async function fetchProductReviews(productId:number){

        
        const { data, refresh } = await useFetch("/api/e-commerce/get-product-reviews", {

            query: {
                productId: productId,
            
               
            }
        });

        productReviewData.value = data.value
    }
  
 


    return {fetchProductReviews,productReviewData}
})