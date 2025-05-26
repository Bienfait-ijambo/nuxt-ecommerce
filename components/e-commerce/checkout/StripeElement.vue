<script setup>
import { ref, onMounted } from "vue";

import { useWebSocket } from '@vueuse/core'



const wsUrl = 'ws://localhost:3000/api/admin/dashboard/_ws'
const { status, data:wsData, send, open, close } = useWebSocket(wsUrl)

const { stripe } = useClientStripe();

const shoppingCartStore = useShoppingCartStore();
const { shoppingCartData, totalPrice } = storeToRefs(shoppingCartStore);

const userCookie = useCookie("user", userCookieSettings);
const isLoading = ref(false);
let elements = null;
let cardElement = null;

const createStripeElements = async () => {
  elements = stripe.value.elements();

  cardElement = elements.create("card", { hidePostalCode: true });
  cardElement.mount("#card-element");
};

async function createPayment() {
  isLoading.value = true;

  const { clientSecret, error, message } = await $fetch(
    "/api/payment/create-payment",
    {
      method: "post",
      body: JSON.stringify({
        userData: userCookie.value?.data?.user,
        productData: shoppingCartData.value,
        totalPrice: totalPrice.value,
      }),
    }
  );

  if (error || !clientSecret) {
    console.error("Client Secret Error:", error);
    showError(error?.message);
    isLoading.value = false;
    return;
  }

  // Use the globally stored cardElement
  const { paymentIntent, error: confirmError } =
    await stripe.value.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          email: userCookie.value?.data?.user?.email,
        },
      },
    });

  if (confirmError) {
    console.error("Payment failed:", confirmError.message);
  } else {
     send('success-payment')
    shoppingCartStore.clearOutCart();
    successMsg(message);
   
  }

  isLoading.value = false;
}

onMounted(() => {
  setTimeout(() => createStripeElements(), 2000);
});
</script>

<template>
  <div>
    <div id="card-element" class="mb-4"></div>

    <button
      v-if="userCookie"
      @click="createPayment"
      :disabled="isLoading"
      class="flex items-center justify-center gap-3 p-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-gray-400"
    >
      <span v-if="isLoading">Processing...</span>
      <span v-else
        >Pay Now {{ shoppingCartStore.formatToUsCurreny(totalPrice) }}</span
      >
    </button>
    <div v-else>
      <p class="mt-1 text-gray-500">
        Sign In to process payment or see orders
        <NuxtLink href="/auth/signin" class="text-bold text-red-500"
          >Sign in</NuxtLink
        >.
      </p>
    </div>
    
  </div>
</template>
