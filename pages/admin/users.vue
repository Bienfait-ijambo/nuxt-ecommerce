<script setup>
definePageMeta({
  layout: "admin",
});

const showModal = ref(false);

const userStore = useUserStore()
const {
    userData,
    userError
} = storeToRefs(userStore);



await userStore.fetchUsers();

const {$isAuthenticated}=useNuxtApp()

</script>
<template>
  <div class="h-screen">
    <div class="flex justify-end mb-4 pt-4">
    </div>
    {{$isAuthenticated(userError)}}

    <UserTable :userData="userData"/>
     
   
  </div>
</template>
