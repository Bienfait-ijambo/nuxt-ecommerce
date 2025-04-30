import { defineStore } from "pinia";

export const useProductStore = defineStore('product-store', () => {
    const productInput = ref({ id: null, name: "", color: "", categoryId: null, price: 0 });
    const edit = ref(false)
    const search=ref("")

    async function fetchProducts() {

        const { data} = await useFetch("/api/admin/product/get", {
            headers: {
                Accept: "application/json",
                // Authorization: `Bearer ${userData?.token}`,
            },
          
            query:{
                search:search.value
            }
        });
        return { data }


    }

    return { productInput,search, edit,fetchProducts }
})