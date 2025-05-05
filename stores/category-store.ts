import { defineStore } from "pinia";

export const useCategoryStore = defineStore('category-store', () => {
    const categoryInput = ref({id:null, name: "" });
    const edit=ref(false)
        const headers = useHeaders()


async function fetchCategories(){
    
    const {data,refresh:getCategories}=await useFetch("/api/admin/category/get-categories",{
        headers: {
           ...headers
          },
      });
      return{data,getCategories}
  

}
    return { categoryInput,edit,fetchCategories }
  })