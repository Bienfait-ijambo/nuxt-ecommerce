
<script setup>

definePageMeta({
    layout:'admin'
})

const checkoutStore=useCheckoutStore()
const {paymentData}=storeToRefs(checkoutStore)
await checkoutStore.fetchPaymentData()
</script>

 <template>
  <div class="h-screen">
   
    <CustomerOrder :userOders="paymentData?.userOrders"/>
  </div>

</template>
