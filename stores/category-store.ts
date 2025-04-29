import { defineStore } from "pinia";

export const useCategoryStore = defineStore('category-store', () => {
    const categoryInput = ref({id:null, name: "" });
    const edit=ref(false)
    // if value true
        // edit
    // else
        // create
async function fetchCategories(){
    
    const {data,refresh:getCategories}=await useFetch("/api/admin/category/get-categories",{
        headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${userData?.token}`,
          },
      });
      return{
        data,getCategories
      }

}
    return { categoryInput,edit ,fetchCategories}
  })