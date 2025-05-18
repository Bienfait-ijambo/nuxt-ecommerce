<script setup lang="ts">
const { stripe ,isLoading} = useClientStripe();
const rawCartTotal = computed(() => 1 * 100);
// const emit = defineEmits(['updateElement']);
let elements = null as any;

const options = {
  mode: 'payment',
  currency: 'eur',
  amount: rawCartTotal.value,
  // paymentMethodCreation: 'manual',
};

const createStripeElements = async () => {
  elements = stripe.elements(options);
  const paymentElement = elements.create('card', { hidePostalCode: true });
  paymentElement.mount('#card-element');
//   emit('updateElement', elements);
};

onMounted(() => {
  createStripeElements();
});
</script>

<template>
  <div id="card-element">
    <!-- Elements will create form elements here -->
  </div>
</template>
