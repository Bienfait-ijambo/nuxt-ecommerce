<script setup >
const config=useRuntimeConfig()
const FALL_BACK_IMG_URL=config?.public?.FALL_BACK_IMG_URL

const props=defineProps(['images'])

const imgWidth = 540;

const mainImgUrl=ref(props?.images?.length >0 ?props?.images[0]?.url : FALL_BACK_IMG_URL)

function selectImage(imageUrl){

  mainImgUrl.value=imageUrl
}
</script>

<template>
  <div>
    <!-- <SaleBadge :node class="absolute text-base top-4 right-4" /> -->
     
    <NuxtImg
      class="rounded-xl object-contain w-full min-w-[350px]"
      :width="imgWidth"
      :height="imgWidth"
      alt="product-name"
      title="product-name"
      :src="mainImgUrl"
      fetchpriority="high"
      placeholder
      placeholder-class="blur-xl" />
    <div  class="my-4 gallery-images">
      <NuxtImg
       v-for="image in images" :key="image?.id"
        class="cursor-pointer rounded-xl"
        :width="imgWidth"
        :height="imgWidth"
        @click="selectImage(image?.url)"
        :src="image?.url || FALL_BACK_IMG_URL"
        alt="product-name"
        title="product-name"
        placeholder
        placeholder-class="blur-xl"
        loading="lazy"
        />
        
    </div>
  </div>
</template>

<style scoped>
.gallery-images {
  display: flex;
  overflow: auto;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
}

.gallery-images img {
  width: 72px;
  aspect-ratio: 5/6;
  object-fit: cover;
}

@media (min-width: 768px) {
  .gallery-images {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));

    img {
      width: 100%;
    }
  }
}
</style>
