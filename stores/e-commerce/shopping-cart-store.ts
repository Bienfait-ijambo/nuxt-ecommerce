


import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore('shopping-cart-store', () => {


    const showCart = ref(false)
    const shoppingCartData = ref<Record<string, any>>([])
    const totalPrice = ref(0)
    const defaultQuantity = ref(1)

    function toggleShoppingCart() {
        showCart.value = !showCart.value
    }


    function storeCartDataToLocalStorage() {
        localStorage.setItem('cartData', JSON.stringify(shoppingCartData.value))

    }
    function getCartDataFromLocalStorage() {
        const data = localStorage.getItem('cartData')

        if (typeof data !== 'object') {
            const parseCartData = JSON.parse(data)
            shoppingCartData.value = parseCartData
            getTotalPrice()
        }

    }



    function addProductToCart(product: Record<string, any>) {



        const productExist = shoppingCartData.value.filter((item: any) => item.id === product?.id)
        if (productExist.length === 0) {

            const updateTotalPrice = parseFloat(product.price) * defaultQuantity.value

            shoppingCartData.value.push({ ...product, quantity: defaultQuantity, totalProductPrice: updateTotalPrice })
            
            storeCartDataToLocalStorage()
            getTotalPrice()
            
        }
    }

    function addQuantity(productId: number, newQuantity: number) {
        const newArray = shoppingCartData.value.filter((item: any) => item.id === productId)
        if (newArray.length > 0) {
            const { quantity, totalProductPrice, ...restProps } = newArray[0]
            const updateQuantity = quantity + newQuantity
            const updateTotalPrice = parseFloat(totalProductPrice) + parseFloat(totalProductPrice)

            //remove this product and add it again
            const updateProduct = shoppingCartData.value.filter((item: any) => item.id !== productId)
            shoppingCartData.value = []
            shoppingCartData.value = [...updateProduct]
            shoppingCartData.value.push({
                quantity: updateQuantity,
                totalProductPrice: updateTotalPrice,
                // price:''
                ...restProps
            })
            getTotalPrice()
            storeCartDataToLocalStorage()
        }
    }

    function reduceQuantity(productId: number, newQuantity: number) {

        const newArray = shoppingCartData.value.filter((item: any) => item.id === productId)
        if (newArray.length > 0) {

            if (newQuantity <= parseFloat(newArray[0].quantity)) {

                const { quantity, totalProductPrice, ...restProps } = newArray[0]
                const updateQuantity = quantity - newQuantity

                if (updateQuantity === 0) {

                    removeProductToCart(productId)
                    getTotalPrice()
                    storeCartDataToLocalStorage()

                } else {
                    const updateTotalPrice = parseFloat(totalProductPrice) - parseFloat(restProps.price)
                    // const updatePrice=quantity+newQuantity

                    //remove this product and add it again
                    const updateProduct = shoppingCartData.value.filter((item: any) => item.id !== productId)
                    shoppingCartData.value = []
                    shoppingCartData.value = [...updateProduct]
                    shoppingCartData.value.push({
                        quantity: updateQuantity,
                        totalProductPrice: updateTotalPrice,
                        ...restProps
                    })
                    getTotalPrice()
                    storeCartDataToLocalStorage()
                }




            }



        }



    }

    function getTotalPrice() {
        totalPrice.value = 0
        shoppingCartData.value.forEach((product: any) => {
            console.log('val :',product?.totalProductPrice)
            totalPrice.value +=product?.totalProductPrice

        });



    }

    

    function removeProductToCart(productId: number) {

        const newArray = shoppingCartData.value.filter((item: any) => item.id !== productId)
        shoppingCartData.value = [...newArray]
        getTotalPrice()
        storeCartDataToLocalStorage()
    }

    function clearOutCart() {

        shoppingCartData.value = []
        totalPrice.value=0
        localStorage.clear()
        getTotalPrice()
        storeCartDataToLocalStorage()
    }


    function formatToUsCurreny(amount: number) {
        const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
        return formatted
    }



    return { addProductToCart, getCartDataFromLocalStorage, defaultQuantity, formatToUsCurreny, reduceQuantity, totalPrice, addQuantity, shoppingCartData, clearOutCart, removeProductToCart, toggleShoppingCart, showCart }
})