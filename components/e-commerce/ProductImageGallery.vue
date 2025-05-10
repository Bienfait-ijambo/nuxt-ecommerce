<script setup lang="ts">
// const { FALLBACK_IMG } = useHelpers();

// const props = defineProps({
//   mainImage: { type: Object, required: true },
//   gallery: { type: Object, required: true },
//   node: { type: Object as PropType<Product | Variation>, required: true },
//   activeVariation: { type: Object, required: false },
// });

// const primaryImage = computed(() => ({
//   sourceUrl: props.mainImage.sourceUrl || FALLBACK_IMG,
//   title: props.mainImage.title,
//   altText: props.mainImage.altText,
//   databaseId: props.mainImage.databaseId,
// }));

// const imageToShow = ref(primaryImage.value);

// const galleryImages = computed(() => {
//   // Add the primary image to the start of the gallery and remove duplicates
//   return [primaryImage.value, ...props.gallery.nodes].filter((img, index, self) => index === self.findIndex((t) => t?.databaseId === img?.databaseId));
// });

// const changeImage = (image: any) => {
//   if (image) imageToShow.value = image;
// };

// watch(
//   () => props.activeVariation,
//   (newVal) => {
//     if (newVal?.image) {
//       const foundImage = galleryImages.value.find((img) => img.databaseId === newVal.image?.databaseId);
//       if (foundImage) imageToShow.value = foundImage;
//     }
//   },
// );

// FALLBACK_IMG

const imgWidth = 540;
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
      src="http://localhost:3000/nike/fix-1.jpg"
      fetchpriority="high"
      placeholder
      placeholder-class="blur-xl" />
    <div  class="my-4 gallery-images">
      <NuxtImg
       
        class="cursor-pointer rounded-xl"
        :width="imgWidth"
        :height="imgWidth"
        src="http://localhost:3000/nike/fix-1.jpg"
        alt="product-name"
        title="product-name"
        placeholder
        placeholder-class="blur-xl"
        loading="lazy"
        />
        <!-- @click.native="changeImage(galleryImg)"  -->
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
