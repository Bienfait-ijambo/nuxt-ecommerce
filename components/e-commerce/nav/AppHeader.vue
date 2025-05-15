<script setup lang="ts"></script>

<template>
  <header class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500">
    <div class="container flex items-center justify-between py-4">
      <div class="flex items-center">
        <!-- <MenuTrigger class="lg:hidden" /> -->
        <Logo class="md:w-[160px]" />
      </div>
      <div
        class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6"
      >
        <div class="flex gap-4 items-center">
          <ClientOnly>
            <SignInLink />

            <CartTrigger />
          </ClientOnly>
        </div>
      </div>
    </div>
  </header>
</template>
