<script setup lang="ts">

</script>

<template>
  <!-- <NuxtLoadingIndicator /> -->
  <div class="flex flex-col min-h-screen">
    <AppHeader />
<!-- 
    <Transition name="slide-from-right">
      <LazyCart v-if="isShowingCart" />
    </Transition>

    <Transition name="slide-from-left">
      <MobileMenu v-if="isShowingMobileMenu" />
    </Transition> -->

    <NuxtPage />

    <!-- <Transition name="fade">
      <div v-if="isShowingCart || isShowingMobileMenu" class="bg-black opacity-25 inset-0 z-40 fixed" @click="closeCartAndMenu" />
    </Transition> -->

    <!-- <LazyAppFooter hydrate-on-visible /> -->
  </div>
</template>


