<script setup>

const productEcomStore=useProductEcomStore()
const {selectedStar}=storeToRefs(productEcomStore)



const isOpen = ref(true);


const emit=defineEmits(['fetchProducts'])

const radioClicked = (rating) => {

  selectedStar.value=parseInt(rating)
    emit('fetchProducts',parseInt(rating))

};
</script>

<template>
  <div>
    <div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center" @click="isOpen = !isOpen">
      <span>Rating</span>  
      <Icon v-show="isOpen" name="ion:chevron-up-outline" />
      <Icon v-show="!isOpen" name="ion:chevron-down-outline" />
    </div>
    <div v-if="isOpen" class="mt-3 text-sm grid text-gray-500 gap-3">
      <div class="cursor-pointer flex gap-2 items-center">
        <input id="star-five" v-model="selectedStar" type="radio" value="5" aria-label="5 stars" @click="radioClicked('5')" />
        <label class="flex items-center" for="star-five">
          <StarRating :rating="5" :size="16" />
        </label>
      </div>
      <div class="cursor-pointer flex gap-2 items-center">
        <input id="star-four" v-model="selectedStar" type="radio" value="4" aria-label="4 stars" @click="radioClicked('4')" />
        <label class="flex items-center" for="star-four">
          <StarRating :rating="4" :size="16" />
          <span class="ml-1 text-xs">& Up</span>
        </label>
      </div>
      <div class="cursor-pointer flex gap-2 items-center">
        <input id="star-three" v-model="selectedStar" type="radio" value="3" aria-label="3 stars" @click="radioClicked('3')" />
        <label class="flex items-center" for="star-three">
          <StarRating :rating="3" :size="16" />
          <span class="ml-1 text-xs">& Up</span>
        </label>
      </div>
      <div class="cursor-pointer flex gap-2 items-center">
        <input id="star-two" v-model="selectedStar" type="radio" value="2" aria-label="2 stars" @click="radioClicked('2')" />
        <label class="flex items-center" for="star-two">
          <StarRating :rating="2" :size="16" />
          <span class="ml-1 text-xs">& Up</span>
        </label>
      </div>
      <div class="cursor-pointer flex gap-2 items-center">
        <input id="star-one" v-model="selectedStar" type="radio" value="1" aria-label="1 star" @click="radioClicked('1')" />
        <label class="flex items-center" for="star-one">
          <StarRating :rating="1" :size="16" />
          <span class="ml-1 text-xs">& Up</span>
        </label>
      </div>
    </div>
  </div>
</template>
