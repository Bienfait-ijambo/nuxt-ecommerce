


import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore('shopping-cart-store', () => {

   
    const showCart=ref(false)
    const shoppingCartData=ref<Record<string,any>>([])

    function toggleShoppingCart(){
        showCart.value=!showCart.value
    }

    function addProductToCart(product:Record<string,any>){

        const productExist=shoppingCartData.value.filter((item:any)=>item.id===product?.id)
        if(productExist.length===0){
            shoppingCartData.value.push({...product,quantity:1})
        }
    }

    function addQuantity(productId:number,newQuantity:number){
      const newArray=shoppingCartData.value.filter((item:any)=>item.id===productId)
      if(newArray.length>0){
        const {quantity,...restProps}=newArray[0]
        const updateQuantity=quantity+newQuantity

        //remove this product and add it again
        shoppingCartData.value.filter((item:any)=>item.id!==productId)
        // shoppingCartData.value=[]
        // shoppingCartData.value=[...newData]
         shoppingCartData.value.push({
        quantity:updateQuantity,
        ...restProps
         })
      }
    }
    
    function reduceQuantity(){
        
    }

      function removeProductToCart(productId:number){

        const newArray=shoppingCartData.value.filter((item:any)=>item.id!==productId)
        shoppingCartData.value=[...newArray]
    }
 
    function clearOutCart(){

        shoppingCartData.value=[]
    }
 


    return {addProductToCart,addQuantity,shoppingCartData,clearOutCart,removeProductToCart,toggleShoppingCart,showCart}
})