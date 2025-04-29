import { defineStore } from "pinia";

export const useProductStore = defineStore('product-store', () => {
    const productInput = ref({id:null, name: "",color:"",categoryId:null,price:"" });
    const edit=ref(false)
    // if value true
        // edit
    // else
        // create
  
    return { productInput,edit }
  })