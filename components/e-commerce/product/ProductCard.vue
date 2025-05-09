<script setup lang="ts">
const route = useRoute();
// const { storeSettings } = useAppConfig();
// const props = defineProps({
//   node: { type: Object as PropType<any>, required: true },
//   index: { type: Number, default: 1 },
// });

const imgWidth = 280;
const imgHeight = Math.round(imgWidth * 1.125);

// example: ?filter=pa_color[green,blue],pa_size[large]
// const filterQuery = ref(route.query?.filter as string);
// const paColor = ref(filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || []);

// // watch filterQuery
// watch(
//   () => route.query,
//   () => {
//     filterQuery.value = route.query.filter as string;
//     paColor.value = filterQuery.value?.split('pa_color[')[1]?.split(']')[0]?.split(',') || [];
//   },
// );

// const mainImage = computed<string>(() => props.node?.image?.producCardSourceUrl || props.node?.image?.sourceUrl || '/images/placeholder.jpg');
// const imagetoDisplay = computed<string>(() => {
//   if (paColor.value.length) {
//     const activeColorImage = props.node?.variations?.nodes.filter((variation) => {
//       const hasMatchingAttributes = variation.attributes?.nodes.some((attribute) => paColor.value.some((color) => attribute?.value?.includes(color)));
//       const hasMatchingSlug = paColor.value.some((color) => variation.slug?.includes(color));
//       return hasMatchingAttributes || hasMatchingSlug;
//     });
//     if (activeColorImage?.length) return activeColorImage[0]?.image?.producCardSourceUrl || activeColorImage[0]?.image?.sourceUrl || mainImage.value;
//   }
//   return mainImage.value;
// });
</script>

<template>
  <div class="relative group">
    <NuxtLink :to="`/product/`" :title="'product name'">
      <SaleBadge  class="absolute top-2 right-2" />
      <NuxtImg
        v-if="true"
        :width="imgWidth"
        :height="imgHeight"
        :src="'http://localhost:3000/nike/fix-1.jpg'"
        :alt="'Product image'"
        :title="'product name'"
        :loading="2 <= 3 ? 'eager' : 'lazy'"
        :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
        class="rounded-lg object-top object-cover w-full aspect-9/8"
        placeholder
        placeholder-class="blur-xl" />
    </NuxtLink>
    <div class="p-2">
      <StarRating  />
      <NuxtLink :to="`/product/`" :title="''">
        <h2 class="mb-2 font-light leading-tight group-hover:text-primary">Ship your idea</h2>
      </NuxtLink>
      <ProductPrice class="text-sm" :sale-price="'250 $'" :regular-price="'14 $'" />
    </div>
  </div>
  <div class="relative group">
    <NuxtLink :to="`/product/`" :title="'product name'">
      <!-- <SaleBadge  class="absolute top-2 right-2" /> -->
      <NuxtImg
        v-if="true"
        :width="imgWidth"
        :height="imgHeight"
        :src="'http://localhost:3000/nike/fix-2.jpg'"
        :alt="'Product image'"
        :title="'product name'"
        :loading="2 <= 3 ? 'eager' : 'lazy'"
        :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
        class="rounded-lg object-top object-cover w-full aspect-9/8"
        placeholder
        placeholder-class="blur-xl" />
    </NuxtLink>
    <div class="p-2">
      <StarRating  />
      <NuxtLink :to="`/product/`" :title="''">
        <h2 class="mb-2 font-light leading-tight group-hover:text-primary">Ship your idea</h2>
      </NuxtLink>
      <ProductPrice class="text-sm" :sale-price="'67 $'" :regular-price="'14 $'" />
    </div>
  </div>
  <div class="relative group">
    <NuxtLink :to="`/product/`" :title="'product name'">
      <SaleBadge  class="absolute top-2 right-2" />
      <NuxtImg
        v-if="true"
        :width="imgWidth"
        :height="imgHeight"
        :src="'http://localhost:3000/nike/fix-3.jpg'"
        :alt="'Product image'"
        :title="'product name'"
        :loading="2 <= 3 ? 'eager' : 'lazy'"
        :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
        class="rounded-lg object-top object-cover w-full aspect-9/8"
        placeholder
        placeholder-class="blur-xl" />
    </NuxtLink>
    <div class="p-2">
      <StarRating  />
      <NuxtLink :to="`/product/`" :title="''">
        <h2 class="mb-2 font-light leading-tight group-hover:text-primary">Ship your idea</h2>
      </NuxtLink>
      <ProductPrice class="text-sm" :sale-price="'17 $'" :regular-price="'74 $'" />
    </div>
  </div>
  <div class="relative group">
    <NuxtLink :to="`/product/`" :title="'product name'">
      <SaleBadge  class="absolute top-2 right-2" />
      <NuxtImg
        v-if="true"
        :width="imgWidth"
        :height="imgHeight"
        :src="'http://localhost:3000/nike/fix-4.jpg'"
        :alt="'Product image'"
        :title="'product name'"
        :loading="2 <= 3 ? 'eager' : 'lazy'"
        :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
        class="rounded-lg object-top object-cover w-full aspect-9/8"
        placeholder
        placeholder-class="blur-xl" />
    </NuxtLink>
    <div class="p-2">
      <StarRating  />
      <NuxtLink :to="`/product/`" :title="''">
        <h2 class="mb-2 font-light leading-tight group-hover:text-primary">Ship your idea</h2>
      </NuxtLink>
      <ProductPrice class="text-sm" :sale-price="'207 $'" :regular-price="'14 $'" />
    </div>
  </div>
  <div class="relative group">
    <NuxtLink :to="`/product/`" :title="'product name'">
      <SaleBadge  class="absolute top-2 right-2" />
      <NuxtImg
        v-if="true"
        :width="imgWidth"
        :height="imgHeight"
        :src="'http://localhost:3000/nike/fix-5.jpg'"
        :alt="'Product image'"
        :title="'product name'"
        :loading="2 <= 3 ? 'eager' : 'lazy'"
        :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
        class="rounded-lg object-top object-cover w-full aspect-9/8"
        placeholder
        placeholder-class="blur-xl" />
    </NuxtLink>
    <div class="p-2">
      <StarRating  />
      <NuxtLink :to="`/product/`" :title="''">
        <h2 class="mb-2 font-light leading-tight group-hover:text-primary">Ship your idea</h2>
      </NuxtLink>
      <ProductPrice class="text-sm" :sale-price="'17 $'" :regular-price="'14 $'" />
    </div>
  </div>
  <div class="relative group">
    <NuxtLink :to="`/product/`" :title="'product name'">
      <SaleBadge  class="absolute top-2 right-2" />
      <NuxtImg
        v-if="true"
        :width="imgWidth"
        :height="imgHeight"
        :src="'http://localhost:3000/nike/fix-6.jpg'"
        :alt="'Product image'"
        :title="'product name'"
        :loading="2 <= 3 ? 'eager' : 'lazy'"
        :sizes="`sm:${imgWidth / 2}px md:${imgWidth}px`"
        class="rounded-lg object-top object-cover w-full aspect-9/8"
        placeholder
        placeholder-class="blur-xl" />
    </NuxtLink>
    <div class="p-2">
      <StarRating  />
      <NuxtLink :to="`/product/`" :title="''">
        <h2 class="mb-2 font-light leading-tight group-hover:text-primary">Ship your idea</h2>
      </NuxtLink>
      <ProductPrice class="text-sm" :sale-price="'17 $'" :regular-price="'14 $'" />
    </div>
  </div>
</template>
