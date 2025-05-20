


import { defineStore } from "pinia";

export const useCheckoutStore = defineStore('checkout-store', () => {

   
    const customerOderData=ref<any>({})
     const paymentData=ref<any>({})


    
    async function fetchPaymentData(){

        
        const { data, refresh } = await useFetch("/api/admin/payment/all-payments");

        paymentData.value = data.value
    }
  


    async function fetchCustomerOder(userId:number){

        
        const { data, refresh } = await useFetch("/api/payment/get-payments", {

            query: {
                userId: userId,
            
               
            }
        });

        customerOderData.value = data.value
    }
  
 


    return {customerOderData,fetchCustomerOder,paymentData,fetchPaymentData}
})