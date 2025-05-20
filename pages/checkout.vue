<script setup>
const userCookie = useCookie('user', userCookieSettings);
const userEmail=ref(userCookie.value?.data?.user?.email)
</script>

<template>
  <div class="flex flex-col min-h-[600px]">
    <div
      class="container flex flex-wrap items-start gap-8 my-16 justify-evenly lg:gap-20"
    >
      <div class="grid w-full max-w-2xl gap-8 checkout-form md:flex-1">
        <!-- Customer details -->
        <div>
          <h2 class="w-full mb-2 text-2xl font-semibold leading-none">
            Contact Information
          </h2>
          <p class="mt-1 text-sm text-gray-500">
            Already have an account?
            <a href="/auth/signin" class="text-primary text-semibold">Log in</a>.
          </p>
          <div class="w-full mt-4">
            <label for="email">E-mail</label>
            <input
              placeholder="johndoe@email.com"
              autocomplete="email"
              disabled="true"
              v-model="userEmail"
              type="email"
              name="email"
              
              required
            />
          </div>
        </div>

        <!-- Pay methods -->
        <div class="mt-2 col-span-full">
          <h2 class="mb-4 text-xl font-semibold">Payment Options</h2>
        </div>

        <StripeElement />
        <!-- Order note -->
      </div>

      <OrderSummary>
        <CartCard :products="shoppingCartData" />
      </OrderSummary>
    </div>
  </div>
</template>

<style lang="postcss">
.checkout-form input[type="text"],
.checkout-form input[type="email"],
.checkout-form input[type="tel"],
.checkout-form input[type="password"],
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
