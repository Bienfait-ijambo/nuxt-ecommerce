import { defineStore } from "pinia";

export const useProductStore = defineStore('product-store', () => {
    const productInput = ref({ id: null, name: "", color: "", categoryId: null, price: 0 });
    const edit = ref(false)
    const search=ref("")
    const productData=ref<any>(null)
    const page=ref(1)
    const limit=ref(10)



   
    async function fetchProducts() {

        const {data,refresh} = await useFetch("/api/admin/product/get", {
            headers: {
                Accept: "application/json",
                // Authorization: `Bearer ${userData?.token}`,
            },
          
            query:{
                search:search.value,
                page:page.value,
                limit:limit.value
            }
        });
      
       productData.value=data.value
       limit.value=productData.value?.metadata.limit
       page.value=productData.value?.metadata.page

     
      

    }


    async function deleteProduct(id:number) {

        const res=await $fetch("/api/admin/product/delete", {
            headers: {
                Accept: "application/json",
                // Authorization: `Bearer ${userData?.token}`,
            },
            method:'DELETE',
            body:JSON.stringify({id:id})

        });
        successMsg(res?.message)
 

    }




    async function changePage(newPage:number){
        page.value=newPage
        await fetchProducts()
    }
   
    return { productInput,search, productData,edit,fetchProducts,changePage,deleteProduct }
})