<script setup >


 const {$logout}=useNuxtApp()
 const config=useRuntimeConfig()

 const DEFAULT_USER_AVATAR=config?.public?.DEFAULT_USER_AVATAR
 
 const userCookie = useCookie('user', userCookieSettings);

</script>

<template>
  <NuxtLink to="/auth/signin" title="Sign In" class="hidden sm:inline-flex aspect-square items-center">
    <Transition name="pop-in" mode="out-in">
    
      <span v-if="userCookie" class="relative avatar">
        <img
          :src="DEFAULT_USER_AVATAR"
          class="rounded-full transform scale-125 shadow-md overflow-hidden border border-white my-auto"
          width="22"
          height="22"
          :alt="'link-title'" />
        <div class="account-dropdown">
          <NuxtLink :to="'/'" class="hover:bg-gray-100"><Icon name="ion:heart-outline" size="16" /><span>Wishlist</span></NuxtLink>
          <NuxtLink to="/checkout" class="hover:bg-gray-100"><Icon name="ion:person-outline" size="16" /><span>My Account</span></NuxtLink>
          <button @click=$logout() class="text-red-600 hover:bg-red-50" >
          
            <Icon  name="ion:log-out-outline" size="16" />
            <span>Logout</span>
          </button>
        </div>
      </span>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

    </Transition>
  </NuxtLink>
</template>

<style scoped lang="postcss">
.pop-in-enter-active,
.pop-in-leave-active {
  transition: transform 0.3s;
}

.pop-in-enter-from,
.pop-in-leave-to {
  transform: scale(0);
}

.avatar {
  .account-dropdown {
    @apply absolute gap-2 top-6 -right-2  z-50 p-2 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-gray-700 hidden;

    a,
    button {
      @apply flex gap-2 items-center p-2 rounded whitespace-nowrap min-w-[200px];
    }
  }

  &:hover .account-dropdown {
    @apply grid;
  }
}
</style>
