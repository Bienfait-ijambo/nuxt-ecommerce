<script setup lang="ts">
// import { loadStripe } from '@stripe/stripe-js';
// import type { Stripe, StripeElements, CreateSourceData, StripeCardElement } from '@stripe/stripe-js';


</script>

<template>
  <div class="flex flex-col min-h-[600px]">
      <!-- <div v-if="cart.isEmpty" class="flex flex-col items-center justify-center flex-1 mb-12">
        <Icon name="ion:cart-outline" size="156" class="opacity-25 mb-5" />
        <h2 class="text-2xl font-bold mb-2">{{ $t('messages.shop.cartEmpty') }}</h2>
        <span class="text-gray-400 mb-4">{{ $t('messages.shop.addProductsInYourCart') }}</span>
        <NuxtLink
          to="/products"
          class="flex items-center justify-center gap-3 p-2 px-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark">
          {{ $t('messages.shop.browseOurProducts') }}
        </NuxtLink>
      </div> -->
<!-- v-else -->
      <form  class="container flex flex-wrap items-start gap-8 my-16 justify-evenly lg:gap-20" >
        <div class="grid w-full max-w-2xl gap-8 checkout-form md:flex-1">
          <!-- Customer details -->
          <div >
            <h2 class="w-full mb-2 text-2xl font-semibold leading-none">Contact Information</h2>
            <p class="mt-1 text-sm text-gray-500">Already have an account? <a href="/my-account" class="text-primary text-semibold">Log in</a>.</p>
            <div class="w-full mt-4">
              <label for="email">E-mail</label>
              <input
                placeholder="johndoe@email.com"
                autocomplete="email"
                type="email"
                name="email"
               
                required />
           
            </div>
           
            <div v-if="!viewer" class="flex items-center gap-2 my-2">
              <label for="creat-account">Create an account?</label>
              <input id="creat-account"  type="checkbox" name="creat-account" />
            </div>
          </div>

          

          <!-- Pay methods -->
          <div  class="mt-2 col-span-full">
            <h2 class="mb-4 text-xl font-semibold">Payment Options</h2>
            <ClientOnly>
       <StripeElement />
      </ClientOnly>
            <!-- <PaymentOptions v-model="orderInput.paymentMethod" class="mb-4" :paymentGateways /> -->
          
            <!-- v-if="stripe" v-show="orderInput.paymentMethod.id == 'stripe'" :stripe @updateElement="handleStripeElement"  -->
          </div>

          <!-- Order note -->
         
        </div>

        <OrderSummary>
          <button
            class="flex items-center justify-center w-full gap-3 p-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-gray-400"
            >
            Checkout
            <!-- <LoadingIcon v-if="isProcessingOrder" color="#fff" size="18" /> -->
          </button>
        </OrderSummary>
      </form>
  </div>
</template>

<style lang="postcss">
.checkout-form input[type='text'],
.checkout-form input[type='email'],
.checkout-form input[type='tel'],
.checkout-form input[type='password'],
.checkout-form textarea,
.checkout-form select,
.checkout-form .StripeElement {
  @apply bg-white border rounded-md outline-none border-gray-300 shadow-sm w-full py-2 px-4;
}

.checkout-form input.has-error,
.checkout-form textarea.has-error {
  @apply border-red-500;
}

.checkout-form label {
  @apply my-1.5 text-xs text-gray-600 uppercase;
}

.checkout-form .StripeElement {
  padding: 1rem 0.75rem;
}
</style>
