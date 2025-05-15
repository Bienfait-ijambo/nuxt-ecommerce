

<script setup>

const productEcomStore = useProductEcomStore();
const { singleProductData } =
  storeToRefs(productEcomStore);
  const productReviewStore=useProductReviewStore()


const userCookie = useCookie('user', userCookieSettings);
 const hovered = ref(0);
const rating = ref(null)
const loading=ref(false)
   const productReviewInput = ref({
        userId:userCookie.value?.data?.user?.id ,
        starNumber:null,
        productId:null,
        comment:''
    })

function getSelectedStarNumber(val){
    const productId=singleProductData.value?.products?.id
    productReviewInput.value.starNumber=val
    productReviewInput.value.productId=productId
   

}
  

async function addComment(){
  try{
     loading.value = true;
    const res = await $fetch("/api/e-commerce/create-review", {
      method: "POST",
      body: JSON.stringify(productReviewInput.value),
    });
    loading.value=false
    await productReviewStore.fetchProductReviews(productReviewInput.value.productId)
    productReviewInput.value.comment=''
    successMsg(res?.message)
  }catch(error){
      loading.value=false
    showLoginOrSignUpError(error)
  }
}
 
</script>

  <template>
    


     <transition class="ease-in-out transform transition-all" name="scale-y">
      <form @submit.prevent="addComment" class="writeReview">
        <div class="w-full text-gray-500">
          <div class="p-5 mt-3 grid gap-2 border rounded-lg">
            <div class="block text-center mb-1.5">
                  
              <label class="text-center text-sm block relative m-auto">How was your experience? <span class="text-red-500">*</span></label>
              <div class="gap-1 flex justify-center mt-2 relative">
           
                <label
                  v-for="i in 5"
                  :key="i"
                  class="grid p-1 rounded"
                  @click="getSelectedStarNumber(i)"
                  :class="rating < i && i > hovered ? 'disable-star' : 'checked-star'"
                  >
                  <input type="radio" class="overflow-hidden appearance-none opacity-0 absolute" name="rating" :value="i" v-model="rating" required />
                 <StarIcon />
                  
        

                </label>
              </div>
            </div>
            <div class="w-full col-span-full">
              <label for="content" class="text-sm mb-0.5">How was your experience<span class="text-red-500">*</span></label>
              <textarea  class="w-full" id="content" placeholder="Great Quality" v-model="productReviewInput.comment" required></textarea>
            </div>
            
           
            <div class="w-full col-span-full text-center mt-3">
              <button
              :disabled="loading"
                class="flex gap-4 justify-center items-center transition font-semibold rounded-md w-full p-2 bg-amber-300 text-amber-900 hover:bg-amber-400"
                type="submit">
                <LoadingIcon v-if="loading"  stroke="4" size="16" color="#78350F" />
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </transition>
  </template>

<style lang="postcss" scoped>
.disable-star {
  @apply bg-white shadow-sm text-gray-300 border border-gray-300;
  transition: 0.15s ease-in-out;
}
.checked-star {
  @apply text-amber-400 bg-amber-50 border border-amber-400;
  transition: 0.15s ease-in-out;
  box-shadow: 0 0px 4px 0 rgb(249 191 59 / 21%);
}
.writeReview input,
.writeReview textarea {
  @apply bg-white border rounded-md outline-none border-gray-300 shadow-sm w-full py-2 px-4;
}
</style>