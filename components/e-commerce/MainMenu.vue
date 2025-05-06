<script setup lang="ts">
// const { wishlistLink } = useAuth();
</script>

<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/products">Products</NuxtLink>
    <NuxtLink to="/categories">Categories</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
    <NuxtLink class="lg:hidden" >Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-accoun" >My Account</NuxtLink>
  </nav>
</template>
